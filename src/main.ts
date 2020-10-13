import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import './registerServiceWorker'
import '@/assets/css/common.scss'
// import utils from '@/util/util'
// import regexps from '@/util/regexp'
// import net from '@/util/net-config'

// Vue.prototype.$utils = utils
// Vue.prototype.$regexps = regexps
// Vue.prototype.$net = net

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

createApp(App).use(store).use(router).mount('#app')
