var axios = require('axios') // axios

module.exports = {
  get: function (url, params) {
    return instance()
      .get(url, params)
      .then(result => {
        return commonHttpSuccessResultDeal(result, url)
      })
      .catch(result => {
        return dealWithErrorHandle('错误')
      })
  },
  post: function (url, param) {
    return instance()
      .post(url, param)
      .then(result => {
        return commonHttpSuccessResultDeal(result, url)
      })
      .catch(result => {
        return dealWithErrorHandle('错误')
      })
  }
}

var instance = function () {
  return axios.create({
    timeout: 10000,
    headers: { 'Authorization': localStorage.getItem('Authorization') }
  })
}

var commonHttpSuccessResultDeal = function (result) {
  // 未登陆处理
  var headerCookie = localStorage.getItem('Authorization')
  var req = new RegExp('#.*')
  var url = window.location.href
  var resultUrl = url.replace(req, '#/login')
  if (headerCookie === '' || headerCookie === null) {
    window.location.href = resultUrl
  }
  // 统一错误处理
  if (result.code === 700) {
    window.location.href = resultUrl
  }
  if (result.data.success === false) {
    return dealWithErrorHandle(result.data.msg)
  }
  return Promise.resolve(result.data)
}

var dealWithErrorHandle = function (msg) {
  console.log(msg)
}
