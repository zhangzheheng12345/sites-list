<template>
  <div class="flex bg-gray-9 color-white p-8px justify-end">
    <button
      @click="browseMode.toggle()"
      class="text-inherit mr-10px"
      :class="{
        'i-mdi-eye': !browseMode.browserMode,
        'i-mdi-jump': browseMode.browserMode
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

const browseMode = useBrowseMode()
</script>
