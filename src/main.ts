import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import net from './util/net-config'

router.beforeEach((to, from, next) => {
  // TODO 登录拦截
  next()
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.config.globalProperties.$net = net

app.mount('#app')
