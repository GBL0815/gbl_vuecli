import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import '@/registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/assets/css/common.scss'
import utils from '@/util/util'
import regexps from '@/util/regexp'
import net from '@/util/net-config'

Vue.prototype.$utils = utils
Vue.prototype.$regexps = regexps
Vue.prototype.$net = net

Vue.use(VueAxios, axios)
Vue.config.productionTip = process.env.NODE_ENV === 'development'

router.beforeEach((to, from, next) => {
  // let headerCookie = localStorage.getItem('Authorization')
  // if (!to.meta.needntLogin) {
  //   if (headerCookie === '' || headerCookie === null) {
  //     next({
  //       path: '/login'
  //     })
  //     return
  //   }
  // }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
