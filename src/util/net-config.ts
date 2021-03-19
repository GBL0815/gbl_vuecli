const axios = require('axios')
// const router = require('@/route')

const net = (url: string, method = 'get', params: unknown = {}): Promise<unknown> => {
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

  return new Promise((resolve) => {
    netServer.then((res: { data: unknown }) => {
      // 未登陆处理
      // let headerCookie = localStorage.getItem('Authorization')
      // if (headerCookie === '' || headerCookie === null) {
      //   return new Promise(() => {}).catch(e: Error => { console.log(e) })
      //   router.default.push('/login')
      // }
      // 统一错误处理
      // if (res.data.code !== 200 || res.data.success === false) {
      //   return new Promise(() => {}).catch((e: Error) => { console.log(e) })
      // }
      resolve(res.data)
    }).catch((e: Error) => {
      console.log(e)
    })
  })
}

export default net
