/// <reference types="vitest"/>

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
      presets: [
        presetUno({
          dark: 'media',
          safelist: 'i-logos-vue i-logos-svelte'.split(' ')
        }),
        presetIcons({
          scale: 1.4,
          cdn: 'https://esm.sh'
        })
      ]
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
  },
  test: {
    testTimeout: 2500
  }
})
