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

