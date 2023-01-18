export const sitesData = {
  'Front End': {
    'MDN Official': 'https://developer.mozilla.org',
    'Web Framework': {
      Vue: {
        'Vue Official': 'https://vuejs.org',
        'Vue Official (Chinese)': 'https://cn.vuejs.org',
        'Vue Router Official': 'router.vuejs.org',
        'Vue Router Official (Chinese)': 'router.vuejs.org/zh',
        SSR: '-----',
        'Nuxt Official': 'https://nuxt.com',
        'Nuxt Official (Chinese)': 'https://nuxt.com.cn',
        Utilities: '-----',
        'VueUse Official': 'https://vueuse.org',
        'State Management': '-----',
        'Pinia Official': 'https://pinia.vuejs.org',
        'Pinia Official (Chinese)': 'https://pinia.web3doc.top',
        'Vuex Official': 'https://vuex.vuejs.org',
        'Vuex Offcial (Chinese)': 'https://vuex.vuejs.org/zh'
      },
      Svelte: {
        'Svelte Official': 'svelte.dev',
        'Svelte Official (Chinese)': 'https://www.sveltejs.cn',
        SSR: '-----',
        'SvelteKit Official': 'https://kit.svelte.dev'
      }
    },
    'Dev & Build': {
      Vite: {
        'Vite Official': 'https://vitejs.dev',
        'Vite Official (Chinese)': 'https://cn.vitejs.dev',
        SSG: '-----',
        'VitePress Official': 'https://vitepress.vuejs.org',
        'VitePress Official (Chinese)': 'https://vitepress.docschina.org/',
        'ViteSSG Repo': 'https://github.com/antfu/vite-ssg',
        Test: '-----',
        'Vitest Official': 'https://vitest.dev',
        'Vitest Official (Chinese)': 'cn.vitest.dev'
      },
      'Webpack Official': 'https://webpack.js.org',
      'Webpack Official (Chinese)': 'https://www.webpackjs.com',
      'unbuild Repo': 'https://github.com/unjs/unbuild',
      'tsup Official': 'https://tsup.egoist.dev',
      'Rollup Official': 'https://rollupjs.org',
      'Rollup Official (Chinese)': 'https://www.rollupjs.com',
      'esbuild Official': 'https://esbuild.github.io',
      'esbuild Official (Chinese)': 'https://esbuild.docschina.org',
      'SWC Official': 'https://swc.rs'
    },
    CSS: {
      'CSS in HTML': {
        'UnoCSS Document': 'https://uno.antfu.me',
        'Windi CSS Official': 'https://windicss.org',
        'Tailwind CSS Official': 'https://tailwindcss.com'
      },
      'Pre-processor': {
        'LESS Official': 'https://lesscss.org',
        'LESS Official (Chinese)': 'https://less.bootcss.com',
        'SASS Official': 'https://sass-lang.com',
        'SASS Official (Chinese)': 'https://www.sass.hk'
      }
    }，
    'Doc in Comment': {
      TSDoc: 'https://tsdoc.bootcss.com',
      JSDoc: 'https://jsdoc.app',
      'JSDoc (Chinese)': 'https://www.jsdoc.com.cn'
    }
  },
  'Other Resources': {
    Fonts: {
      'Google Fonts Official': 'https://fonts.google.com',
      'Google Fonts Official (Chinese)': 'https://www.googlefonts.cn'
    },
    Icons: {
      'Icones Official': 'https://icones.js.org',
      'Iconify Offcial': 'https://iconify.design',
      'Iconduck Official': 'https!//iconduck.com'
    }
  }
}

export const sitesLogos = new Map([
  ['Vue', 'i-logos-vue'],
  ['Svelte', 'i-logos-svelte']
])
