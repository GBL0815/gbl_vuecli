module.exports = {
  publicPath: './',
  // assetsDir: 'gblCLi',
  devServer: {
    // 本地开启的服务的端口号
    port: 8000,
    // 本机ip
    host: 'localhost',
    // 自动启动浏览器
    open: true,
    proxy: {
      // TODO
      '/net': {
        target: ' https://www.easy-mock.com/mock/5d0850f61a4d9c7f880eae33/test', // 后端地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/net': ''
        }
      }
    }
  }
}
