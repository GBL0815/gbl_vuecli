import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log('准备完成')
    },
    registered () {
      console.log('注册成功')
    },
    cached () {
      console.log('缓存')
    },
    updatefound () {
      console.log('正在下载新内容...')
    },
    updated () {
      console.log('已下载新内容，请刷新！')
    },
    offline () {
      console.log('找不到Internet连接,应用程序正在脱机模式下运行')
    },
    error (error) {
      console.error('服务工作者注册过程中出错:', error)
    }
  })
}
