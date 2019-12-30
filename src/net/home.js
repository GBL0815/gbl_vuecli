var netBase = require('@/util/net-config.js')

var netService = {
  test: (obj) => {
    return netBase.post('net/test', obj)
  }
}

module.exports = netService
