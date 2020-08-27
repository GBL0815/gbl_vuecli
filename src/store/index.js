import { createStore } from 'vuex'
import home from './modules/home'
import http from './modules/http'

export default createStore({
  modules: {
    home,
    http
  }
})
