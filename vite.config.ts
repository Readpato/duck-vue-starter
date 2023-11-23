import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

const sassAdditionalData = () => {
  let additionalData = '@use "sass:math";'
  additionalData += '@import "@/styles/main";'
  return additionalData
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: sassAdditionalData(),
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
    },
  },
})
