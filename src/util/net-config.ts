import axios from 'axios'
// import router from '../route'

const net = (url: string, method = 'get', data: any, header: any) => {
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
      // TODO 登录拦截
      resolve(res.data)
    }).catch((e) => {
      console.log(e)
    })
  })
}

export default net
