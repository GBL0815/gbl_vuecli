import { createRouter, createWebHistory } from 'vue-router'
import help from './help'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { needntLogin: true }
    },
    ...help
  ]
})

export default router
