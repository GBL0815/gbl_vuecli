import utils from './util'
import regexps from './regexp'
import net from './net-config'

const mixins = {
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

export default mixins
