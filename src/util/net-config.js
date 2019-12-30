var axios = require('axios')
var router = require('@/router')

module.exports = {
  get: (url, params) => {
    return instance()
      .get(url, params)
      .then(result => {
        return commonHttpSuccessResultDeal(result, url)
      })
      .catch(result => {
        return dealWithErrorHandle(result)
      })
  },
  post: (url, param) => {
    return instance()
      .post(url, param)
      .then(result => {
        return commonHttpSuccessResultDeal(result, url)
      })
      .catch(result => {
        return dealWithErrorHandle(result)
      })
  }
}

var instance = () => {
  return axios.create({
    // TODO
    // baseURL: '/net/',
    timeout: 10000,
    headers: { 'Authorization': localStorage.getItem('Authorization') }
  })
}

var commonHttpSuccessResultDeal = (result) => {
  // 未登陆处理
  // let headerCookie = localStorage.getItem('Authorization')
  // if (headerCookie === '' || headerCookie === null) {
  //   router.default.push('/login')
  // }
  // 统一错误处理
  if (result.status !== 200) {
    dealWithErrorHandle('接口请求异常')
    return Promise.resolve('error')
  }
  if (result.data.code === 700) {
    router.default.push('/login')
    return Promise.resolve('error')
  }
  if (result.data.code !== 200 || result.data.success === false) {
    dealWithErrorHandle(result.data.msg)
    return Promise.resolve('error')
  }
  return Promise.resolve(result.data)
}

var dealWithErrorHandle = (msg) => {
  console.log(msg)
}
