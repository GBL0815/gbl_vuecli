import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

import regexp from './regexp'
import util from './util'

const utilFun = () => {
  const route = useRoute()
  const router = useRouter()
  const store = useStore()
  const regexps = regexp
  const utils = util

  return {
    route,
    router,
    store,
    regexps,
    utils
  }
}

export default utilFun
