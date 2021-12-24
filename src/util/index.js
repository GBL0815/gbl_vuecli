import { useRoute, useRouter } from 'vue-router'

import regexp from './regexp'
import util from './util'

const utilFun = () => {
  const route = useRoute()
  const router = useRouter()
  const regexps = regexp
  const utils = util

  return {
    route,
    router,
    regexps,
    utils
  }
}

export default utilFun
