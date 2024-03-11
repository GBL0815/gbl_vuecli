import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: './',
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
})
