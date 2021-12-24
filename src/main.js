import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import { createPinia } from 'pinia'
import './style/common.scss'
import net from './util/net-config'

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

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.config.productionTip = process.env.NODE_ENV === 'development'
app.config.devtools = process.env.NODE_ENV === 'development'
app.config.globalProperties.$net = net

app.mount('#app')
