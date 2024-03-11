import { useRoute, useRouter } from 'vue-router'

import util from './util'

const utilFun = () => {
  const route = useRoute()
  const router = useRouter()
  const utils = util

  return {
    route,
    router,
    utils
  }
}

export default utilFun
