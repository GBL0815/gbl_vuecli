import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import './registerServiceWorker'
import '@/assets/css/common.scss'

// Vue.config.productionTip = process.env.NODE_ENV === 'development'

// 路由拦截
// router.beforeEach((to: any, from: any, next: any) => {
//   const headerCookie: any = localStorage.getItem('Authorization')
//   if (to.meta.needntLogin) {
//     if (headerCookie === '' || headerCookie === null) {
//       next({
//         path: '/home',
//       })
//       return
//     }
//   }
//   next()
// })

const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')
