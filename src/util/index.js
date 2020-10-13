import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import regexp from './regexp'
import util from './util'

const utils = () => {
  const router = useRouter()
  const store = useStore()
  const regexps = regexp
  const utils = util

  return {
    router,
    store,
    regexps,
    utils
  }
}

export default utils
