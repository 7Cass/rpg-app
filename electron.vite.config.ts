import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@/lib': resolve('src/main/lib'),
        '@shared': resolve('src/shared')
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    assetsInclude: 'src/renderer/assets/**',
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@shared': resolve('src/shared'),
        '@/hooks': resolve('src/renderer/hooks'),
        '@/assets': resolve('src/renderer/assets'),
        '@/store': resolve('src/renderer/store'),
        '@/components': resolve('src/renderer/hooks'),
        '@/utils': resolve('src/renderer/utils'),
        '@/mocks': resolve('src/renderer/mocks')
      }
    },
    plugins: [react()]
  }
})
