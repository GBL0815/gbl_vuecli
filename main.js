import Vue from 'vue'
import App from './App'
import store from '@/store/index'
import utils from '@/util/util'
import regexps from '@/util/regexp'
import net from '@/util/net-config'
import '@/static/css/common.scss'
import uCharts from '@/static/js/u-charts.js'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$utils = utils
Vue.prototype.$regexps = regexps
Vue.prototype.$net = net

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
