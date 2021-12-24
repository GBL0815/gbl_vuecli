import { createRouter, createWebHashHistory } from 'vue-router'
import help from './help'

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: { needntLogin: true }
    },
    ...help
  ]
})
