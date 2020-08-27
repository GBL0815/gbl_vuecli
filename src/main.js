import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import store from './store/index'
import './style/common.scss'

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
app.use(store)
app.use(router)
app.config.productionTip = process.env.NODE_ENV === 'development'

app.mount('#app')
