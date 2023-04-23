import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  css: {
    preprocessorOptions: {
      /* less: {
        additionalData: '@import "@/assets/style/common.less";'
      } */
      scss: {
        additionalData: '@import "@/assets/style/global.scss";'
      }
    }
  },
  server: {
    port: 5300,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
