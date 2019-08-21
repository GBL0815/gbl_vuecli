module.exports = {
  publicPath: './',
  // TODO
  assetsDir: 'dist',
  devServer: {
    // 本地开启的服务的端口号
    port: 8000,
    // 本机ip
    host: 'localhost',
    // 自动启动浏览器
    open: true,
    proxy: {
      '/roadMonitor': {
        target: 'http://118.31.21.83:8085/roadMonitor', // 后端地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/roadMonitor': ''
        }
      }
    }
  },
  configureWebpack: {
    externals: {
      'AMap': 'AMap'
    }
  }
}
