import vue from '@vitejs/plugin-vue'

const path = require('path')

module.exports = {
  base: './',
  port: 8080,
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  plugins: [vue()],
  proxy: {
    '/api': {
      target: 'https://mock.yonyoucloud.com/mock/5859/test',
      changeOrigin: true,
      ws: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}
