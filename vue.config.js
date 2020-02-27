module.exports = {
  publicPath: './',
  // assetsDir: 'gblCLi',
  devServer: {
    disableHostCheck: true,
    // 自动启动浏览器
    open: true,
    proxy: {
      // TODO
      '/net': {
        target: 'http://127.0.0.1:8081', // 后端地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/net': ''
        }
      }
    }
  }
}
