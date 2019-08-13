import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./registerServiceWorker"
import axios from 'axios'
import VueAxios from 'vue-axios'
import vueCookie from 'vue-cookie'
import Vant, { Lazyload } from 'vant' // vant组件库
import 'vant/lib/index.css' // vant样式库
import myCharts from 'echarts' // echarts

Vue.use(vueCookie)
Vue.use(VueAxios, axios)
Vue.use(Vant)
Vue.use(Lazyload)
Vue.prototype.$echarts = myCharts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
