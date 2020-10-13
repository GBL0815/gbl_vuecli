import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import help from './help'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: { needntLogin: false }
    },
    ...help
  ]
})
