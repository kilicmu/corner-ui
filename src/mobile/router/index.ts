import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import {
  DescriptionItem, ComponentsDscription,
} from '@/types/ComponentDescription'
import describe from '@/common/describe.json'

// enforce route description to add component lazy import function;
const { route: rs } = describe as ComponentsDscription

// 对描述增强, 添加组件函数
rs.forEach((r:DescriptionItem) => {
  r.component = () => import(
    // issue for webpack
    // eslint-disable-next-line prefer-template
    '../../components/' + r.name + '/examples/index.vue'
  )
})

rs.unshift({
  name: 'home',
  path: '/',
  component: () => import(
    // eslint-disable-next-line prefer-template
    '../views/Home/index.vue'
  ),
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const routes: Array<RouteRecordRaw> = rs

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

interface MessageData {
  to: string;
  meta: {
    from: string;
    flag: string;
  }
}

window.addEventListener('message', (e) => {
  console.log(e.data.to, router.currentRoute.value.fullPath)
  if (e.data.to === router.currentRoute.value.fullPath) {
    return
  }
  if (e.data?.meta?.flag === 'router') {
    router.push(e.data.to)
  }
}, false)

// 处理跳转前与mobile通信问题
router.beforeEach((to, from, next) => {
  window.parent.postMessage({
    to: to.fullPath,
    meta: {
      from: 'mobile',
      flag: 'router',
    },
  }, '*')
  next()
})

export default router
