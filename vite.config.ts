import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ioc: resolve(__dirname, 'ioc.html'),
        di: resolve(__dirname, 'di.html'),
        aop: resolve(__dirname, 'aop.html'),
        mvc: resolve(__dirname, 'mvc.html'),
      },
    },
  },
})
