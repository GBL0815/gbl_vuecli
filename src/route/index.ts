import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import help from './help'

const routes: RouteRecordRaw[] = [
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

export default createRouter({
  history: createWebHashHistory(),
  routes
})
