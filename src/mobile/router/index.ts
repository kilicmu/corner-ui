import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import {
  DescriptionItem, ComponentsDscription,
} from '../../types/ComponentDescription'
import describe from '../../components/describe.json'

// enforce route description to add component lazy import function;
const { routes: rs } = describe as ComponentsDscription

// 对描述增强, 添加组件函数
rs.forEach((r:DescriptionItem) => {
  // eslint-disable-next-line prefer-template
  r.component = () => import('../../components' + r.docPath + '.md')
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const routes: Array<RouteRecordRaw> = rs

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 处理跳转前与mobile通信问题
router.beforeEach((to, from, next) => {
  console.log(to, from)
  next()
})

export default router
