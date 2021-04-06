import { useRouter, useRoute } from 'vue-router'

import { useStore } from 'vuex'

import regexp from './regexp'
import utilFun from './utils'

const utils = () => {
  const route = useRoute()
  const router = useRouter()
  const store = useStore()
  const regexps = regexp
  const util = utilFun

  return {
    route,
    router,
    store,
    regexps,
    util
  }
}

export default utils
