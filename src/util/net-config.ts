import axios from 'axios'
import router from '@/router'

export default {
  get: (url: string, params: any) => {
    return instance()
      .get(url, params)
      .then((result) => {
        return commonHttpSuccessResultDeal(result)
      })
      .catch((result) => {
        return dealWithErrorHandle(result)
      })
  },
  post: (url: string, param: any) => {
    return instance()
      .post(url, param)
      .then((result) => {
        return commonHttpSuccessResultDeal(result)
      })
      .catch((result) => {
        return dealWithErrorHandle(result)
      })
  }
}

const instance = () => {
  return axios.create({
    // TODO
    // baseURL: process.env.NODE_ENV === 'development' ? '' : '/base/',
    timeout: 10000,
    headers: { Authorization: localStorage.getItem('Authorization') }
  })
}

const commonHttpSuccessResultDeal = (result: any) => {
  // 未登陆处理
  // let headerCookie = localStorage.getItem('Authorization')
  // if (headerCookie === '' || headerCookie === null) {
  //   router.default.push('/login')
  // }
  // 统一错误处理
  if (result.data.code === 700) {
    router.push('/login')
    return Promise.resolve('error')
  }
  if (result.data.code !== 0 || result.data.success === false) {
    dealWithErrorHandle(result.data.msg)
    return Promise.resolve('error')
  }
  return Promise.resolve(result.data)
}

const dealWithErrorHandle = (msg: any) => {
  console.log(msg)
  return Promise.resolve('error')
}
