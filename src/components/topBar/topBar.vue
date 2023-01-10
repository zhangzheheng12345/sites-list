<template>
  <div class="flex bg-zinc-900 color-white p-8px justify-end">
    <button
      @click="showMenuMore = !showMenuMore"
      class="i-mdi-filter text-inherit"
      title="Filt sites"
    ></button>
    <div v-if="showMenuMore" class="absolute right-10px top-50px p-0 m-0">
      <menuMore :items="filters"></menuMore>
    </div>
    <button
      @click="browseMode.toggle()"
      class="text-inherit mr-15px"
      :class="{
        'i-mdi-eye': browseMode.browserMode,
        'i-mdi-jump': !browseMode.browserMode
      }"
      :title="
        browseMode.browserMode ? 'Toggle to jump mode' : 'Toggle to browse mode'
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
