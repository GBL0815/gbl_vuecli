module.exports = {
  publicPath: './',
  // assetsDir: 'gblCLi',
  devServer: {
    disableHostCheck: true,
    // 自动启动浏览器
    open: true,
    proxy: {
      '': {
        target: 'https://mock.yonyoucloud.com/mock/5859/test', // 后端地址
        changeOrigin: true,
        ws: true
      }
    }
  }
}
