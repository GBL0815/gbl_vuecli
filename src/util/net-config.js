import axios from 'axios'
// import router from '@/route'

const net = (url, method = 'get', params) => {
  const netServer = axios({
    url: process.env.VUE_APP_URL + url,
    method,
    params,
    // TODO
    // baseURL: process.env.NODE_ENV === 'development' ? '' : '/base/',
    timeout: 10000,
    headers: {
      Authorization: localStorage.getItem('Authorization'),
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })

  return new Promise((resolve, reject) => {
    netServer.then(res => {
      // 未登陆处理
      // let headerCookie = localStorage.getItem('Authorization')
      // if (headerCookie === '' || headerCookie === null) {
      //   return new Promise((resolve, reject) => {}).catch(e => { console.log(e) })
      //   router.push('/login')
      // }
      // 统一错误处理
      // if (res.data.code === 700) {
      //   router.push('/login')
      //   return new Promise((resolve, reject) => {}).catch(e => { console.log(e) })
      // }
      if (res.data.code !== 0 || res.data.success === false) {
        return new Promise((resolve, reject) => {}).catch(e => { console.log(e) })
      }
      resolve(res.data)
    }).catch(e => {
      console.log(e)
    })
  })
}

export default net
