import axios from 'axios'
// import router from '../route'

const net = (url, method = 'get', data, header) => {
  const netServer = axios({
    url,
    method,
    params: method === 'get' ? data : null,
    data: method === 'get' ? null : data,
    timeout: 10000,
    headers: {
      Authorization: localStorage.getItem('Authorization'),
      'Content-Type': 'application/json;charset=UTF-8',
      ...header
    }
  })

  return new Promise((resolve, reject) => {
    netServer.then((res) => {
      // 未登陆处理
      // let headerCookie = localStorage.getItem('Authorization')
      // if (headerCookie === '' || headerCookie === null) {
      //   return new Promise((resolve, reject) => {}).catch(e => { console.log(e) })
      //   router.push('/login')
      // }
      // 统一错误处理
      // if (res.data.code !== 0 || res.data.success === false) {
      //   return new Promise((resolve, reject) => {}).catch(e => { console.log(e) })
      // }
      resolve(res.data)
    }).catch((e) => {
      console.log(e)
    })
  })
}

export default net
