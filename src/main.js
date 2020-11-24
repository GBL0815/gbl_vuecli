import Vue from 'vue'
import App from '@/App.vue'
import '@/registerServiceWorker'
import router from '@/router'
import store from '@/store'
import '@/style/common.scss'
import net from '@/util/net-config'
import regexp from '@/util/regexp'
import utils from '@/util/utils'

Vue.config.productionTip = false
Vue.prototype.$net = net
Vue.prototype.$regexp = regexp
Vue.prototype.$utils = utils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
