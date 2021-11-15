import vue from '@vitejs/plugin-vue'

const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base: './',
  plugins: [vue()],
  server: {
    port: 8080,
    open: true,
    cors: true,
    https: false,
    ssr: false,
    proxy: {
      '/api': {
        target: 'https://mock.yonyoucloud.com/mock/5859/test',
        changeOrigin: true,
        ws: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
}
