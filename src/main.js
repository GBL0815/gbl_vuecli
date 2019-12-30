import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/style/common.less'
import utils from '@/util/util'
import regexps from '@/util/regexp'

Vue.prototype.utils = utils
Vue.prototype.regexps = regexps

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let headerCookie = localStorage.getItem('Authorization')
  if (!to.meta.needntLogin) {
    if (headerCookie === '' || headerCookie === null) {
      next({
        path: '/home'
      })
      return
    }
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
