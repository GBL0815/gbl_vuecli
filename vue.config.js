const TerserPlugin = require('terser-webpack-plugin')

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: './',
  // assetsDir: 'gblCLi',
  productionSourceMap: isDevelopment,
  // 压缩图片
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
      .end()
  },
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
    // 抽离公共文件
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: /node_modules/,
            name: 'vendor',
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100
          },
          common: {
            chunks: 'all',
            test: /[\\/]src[\\/]js[\\/]/,
            name: 'common',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60
          },
          styles: {
            name: 'styles',
            test: /\.(sa|sc|c)ss$/,
            chunks: 'all',
            enforce: true
          },
          runtimeChunk: {
            name: 'manifest'
          }
        }
      }
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
