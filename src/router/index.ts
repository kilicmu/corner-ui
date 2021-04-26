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
