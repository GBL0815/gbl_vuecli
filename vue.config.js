const TerserPlugin = require('terser-webpack-plugin')

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: './',
  // assetsDir: 'gblCLi',
  productionSourceMap: isDevelopment,
  configureWebpack: config => {
    if (!isDevelopment) {
      // 代码压缩
      config.plugins.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true // 使用多进程提高构件速度
        })
      )
    }
  },
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
