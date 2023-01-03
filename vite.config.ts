import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import { presetIcons } from 'unocss'

import path from 'path'

export default defineConfig({
  base: '', // Deploy to zhangzheheng12345/bcd
  plugins: [
    vue(),
    Unocss({
      presets: [presetUno(), presetIcons()]
    })
  ],
  server: {
    host: '0.0.0.0',
    hmr: {
      port: 443
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
