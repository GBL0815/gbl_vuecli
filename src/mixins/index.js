import utils from '@/util/util'
import regexps from '@/util/regexp'
import net from '@/util/net-config'

const utilMixin = {
  data () {
    return {
      ...regexps
    }
  },
  methods: {
    ...utils,
    net
  }
}

export default utilMixin
