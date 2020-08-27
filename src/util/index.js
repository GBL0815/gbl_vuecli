import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import netConfig from './net-config'
import regexp from './regexp'
import util from './util'

const utils = () => {
  const router = useRouter()
  const store = useStore()
  const net = netConfig
  const regexps = regexp
  const utils = util

  return {
    router,
    store,
    regexps,
    utils,
    net
  }
}

export default utils
