<template>
  <div class="flex p-8px justify-end dark:bg-zinc-900 dark:color-white">
    <button
      @click="showMenuMore = !showMenuMore"
      class="i-mdi-filter text-inherit"
      title="Filt sites"
    ></button>
    <div v-if="showMenuMore" class="absolute right-40px top-50px p-0 m-0">
      <menuMore :items="filters"></menuMore>
    </div>
    <button
      @click="browseMode.toggle()"
      class="text-inherit"
      :class="browseMode.browserMode ? 'i-mdi-eye' : 'i-mdi-jump'"
      :title="
        browseMode.browserMode ? 'Toggle to jump mode' : 'Toggle to browse mode'
      "
    ></button>
    <button
      @click="toggleDark()"
      class="text-inherit mr-15px"
      :class="isDark ? 'i-carbon-moon': 'i-carbon-sun'"
      :title="
        isDark ? 'Toggle to light mode' : 'Toggle to dark mode'
      "
    ></button>
    <a
      class="i-carbon-logo-github text-inherit"
      href="https://github.com/zhangzheheng12345/sites-list"
      target="_blank"
      title="https://github.com/zhangzheheng12345/sites-list"
    ></a>
  </div>
</template>

<script setup lang="ts">
import { useBrowseMode } from '@/ts/browseMode'
import { filtCn, filtEn, useFilter } from '@/ts/filter'
import { isDark, toggleDark } from '@/ts/isDark'

import { ref } from 'vue'

import menuMore from './menuMore.vue'

const browseMode = useBrowseMode()
const filter = useFilter()

let showMenuMore = ref(false)

const filters = {
  'English only': () => {
    showMenuMore.value = false
    filter.filter = filtEn
  },
  'Chinese only': () => {
    showMenuMore.value = false
    filter.filter = filtCn
  },
  All: () => {
    showMenuMore.value = false
    filter.filter = (str: string) => true
  }
}
</script>
