import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
// @ts-ignore
import describe from '@component-describe';
import { defineAsyncComponent } from '@vue/runtime-core';
import { routerReducerFactory } from '../../tools/routerUtils/reducer';
import { routeChangeActionCreator } from '../../tools/routerUtils/action';


const routes: RouteRecordRaw[] = describe.reduce<RouteRecordRaw[]>((routes:RouteRecordRaw[], next: RouteRecordRaw) => {
  return [
      ...routes,
      {
          ...next,
          component: defineAsyncComponent(
            () => import(`../../components/${String(next.name)}/examples/index.vue`),
          )
      }
  ]
}, [])

routes.unshift({
  name: 'home',
  path: '/',
  component: () => import(
    '../views/Home/index.vue'
  ),
})

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const reducer = routerReducerFactory(router)
window.onmessage = (e:MessageEvent<ReturnType<typeof routeChangeActionCreator>>) => {
  if(e.origin === location.origin) {
      const { data } = e;
      reducer(data)
  }
}

router.beforeEach((to, from, next) => {
  window.parent.postMessage(routeChangeActionCreator({to:to.path, isMobile: false}), location.href)
  next()
})

export default router
