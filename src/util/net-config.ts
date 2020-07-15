const axios = require('axios')
const router = require('@/route')

const net = (url: string, method = 'get', params: any) => {
  const netServer = axios({
    url: process.env.VUE_APP_URL + url,
    method,
    params,
    // TODO
    // baseURL: process.env.NODE_ENV === 'development' ? '' : '/base/',
    timeout: 10000,
    headers: {
      'Authorization': localStorage.getItem('Authorization'),
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })

  return new Promise((resolve, reject) => {
    netServer.then((res: any) => {
      // 未登陆处理
      // let headerCookie = localStorage.getItem('Authorization')
      // if (headerCookie === '' || headerCookie === null) {
      //   return new Promise(() => {}).catch(e => { console.log(e) })
      //   router.default.push('/login')
      // }
      // 统一错误处理
      if (res.data.code === 700) {
        router.default.push('/login')
        return new Promise(() => {}).catch((e: any) => { console.log(e) })
      }
      if (res.data.code !== 200 || res.data.success === false) {
        return new Promise(() => {}).catch((e: any) => { console.log(e) })
      }
      resolve(res.data)
    }).catch((e: any) => {
      console.log(e)
    })
  })
}

export default net
