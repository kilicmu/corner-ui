<<<<<<< HEAD
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router'
import { nextTick } from 'vue'
import {
  DescriptionItem, ComponentsDscription,
} from '@/types/ComponentDescription'
import describe from '../common/describe.json'

// enforce route description to add component lazy import function;
const { route: rs } = describe as ComponentsDscription
// 为添加组件文档位置
rs.forEach((r: DescriptionItem) => {
  r.component = () => import(
    // issue: webpack module build issule
    // eslint-disable-next-line prefer-template
    '../components/' + r.name + '/README.md'
  )
})

rs.unshift({
  name: 'home',
  path: '/',
  component: () => import(
    '../components/README.md'
  ),
})

console.log(rs)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const routes: Array<RouteRecordRaw> = rs

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

let mobileFrame: HTMLIFrameElement | undefined
nextTick(() => {
  mobileFrame = document.querySelector('#mobile-phone') as HTMLIFrameElement
})

// 处理跳转前与mobile通信问题

window.addEventListener('message', (e) => {
  if (e.data?.meta?.flag === 'router') {
    if (e.data.to === router.currentRoute.value.fullPath) {
      return
    }
    router.push(e.data.to)
  }
}, false)

router.beforeEach((to, from, next) => {
  console.log(mobileFrame)
  if (mobileFrame && mobileFrame.contentWindow) {
    mobileFrame.contentWindow.postMessage({
      to: to.fullPath,
      meta: {
        from: 'main',
        flag: 'router',
      },
    }, '*')
  }
  next()
})

export default router
=======
import { createRouter,createWebHashHistory,createWebHistory,RouteRecordRaw} from 'vue-router'
// @ts-ignore
import describe from "@component-describe"
import { routerReducerFactory } from '../tools/routerUtils/reducer';
import { defineAsyncComponent } from '@vue/runtime-core';
import { routeChangeActionCreator } from '../tools/routerUtils/action';

const routes: RouteRecordRaw[] = describe.reduce<RouteRecordRaw[]>((routes:RouteRecordRaw[], next: RouteRecordRaw) => {
    return [
        ...routes,
        {
            ...next,
            component: defineAsyncComponent({
                // The factory function
                loader: () => import(`../components/${String(next.name)}/README.md`),
                delay: 400,
                suspensible: false,
            })
        }
    ]
}, [])

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

window.onmessage = (e:MessageEvent<{to:string}>) => {
    if(e.origin === location.origin) {
      const {data: {to}} = e
      const currentPath = router?.currentRoute?.value?.path
      if(to && currentPath !== to) {
        router.push(to)
      }
    }
}

router.beforeEach((to, from, next) => {
    window.frames[0].postMessage({
      to: to.path
    }, location.origin)
    next()
  })
  

const reducer = routerReducerFactory(router)

window.onmessage = (e: MessageEvent<ReturnType<typeof routeChangeActionCreator>>) => {
    const {data, origin} = e;
    if(origin === location.origin) {
        reducer(data)
    }
} 

router.beforeEach((to, from, next) => {
    const {path} = to;
    window.frames[0].postMessage(routeChangeActionCreator({
        to: path,
        isMobile: true
    }), location.origin)
    next()
})


export default router;

>>>>>>> dev
