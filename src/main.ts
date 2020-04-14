import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/assets/css/common.less'
import utils from '@/util/util'
import regexps from '@/util/regexp'
import net from '@/util/net-config'

Vue.prototype.$utils = utils
Vue.prototype.$regexps = regexps
Vue.prototype.$net = net

Vue.use(VueAxios, axios)
Vue.config.productionTip = process.env.NODE_ENV === 'development'

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

new Vue({
  router,
  store,
  render: (h: any) => h(App)
}).$mount('#app')
