import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router'
import { nextTick } from 'vue'
import {
  DescriptionItem, ComponentsDscription,
} from '../types/ComponentDescription'
import describe from '../components/describe.json'

// enforce route description to add component lazy import function;
const { routes: rs } = describe as ComponentsDscription
rs.forEach((r: DescriptionItem) => {
  r.component = () => import(
    // eslint-disable-next-line prefer-template
    '../components/' + (r.name === 'home' ? '' : `${r.name}/`) + 'README.md'
  )
})

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
  if (mobileFrame && mobileFrame.contentWindow) {
    mobileFrame.contentWindow.postMessage({
      to: to.path,
      meta: {
        from: 'main',
        flag: 'router',
      },
    }, '*')
  }
  next()
})

export default router
