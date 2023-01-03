import { TreeNode, ObjectToTree } from './treeNode'

export const sitesData: Array<TreeNode> = ObjectToTree({
  'Front End': {
    'Web Framework': {
      Vue: {
        'Vue Official': 'https://vuejs.org',
        'Vue Official (Chinese)': 'https://cn.vuejs.org',
        'Vue Router Official': 'router.vuejs.org',
        'Vue Router Official (Chinese)': 'router.vuejs.org/zh',
        SSR: '-----',
        'Nuxt Official': 'https://nuxt.com',
        'Nuxt Official (Chinese)': 'https://nuxt.com.cn',
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
    }
  }
})
