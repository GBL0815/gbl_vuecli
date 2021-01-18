import axios from 'axios'

const net = (url, method = 'get', params) => {
  const netServer = axios({
    url: process.env.VUE_APP_URL + url,
    method,
    params,
    // baseURL: process.env.NODE_ENV === 'development' ? '' : '/base/',
    timeout: 10000,
    headers: {
      Authorization: localStorage.getItem('Authorization'),
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })

  return new Promise((resolve, reject) => {
    netServer.then(res => {
      // 统一错误处理
      // if (res.data.code !== 0 || res.data.success === false) {
      //   return new Promise((resolve, reject) => {}).catch(e => { console.log(e) })
      // }
      resolve(res.data)
    }).catch(e => {
      console.log(e)
    })
  })
}

export default net
