<template>
  <topBar></topBar>
  <div class="p-5% dark:bg-gray-800">
    <treeNode v-for="item in dataToShow" :content="item"></treeNode>
  </div>
</template>

<script setup lang="ts">
import { sitesData } from './ts/sitesData'

import { useFilter } from './ts/filter'
import { filt } from './ts/filter'
import { ObjectToTree } from './ts/treeNode'

import treeNode from './components/mainList/treeNode.vue'
import topBar from './components/topBar/topBar.vue'
import { computed } from '@vue/reactivity'

const filter = useFilter()

const dataToShow = computed(() => {
  return ObjectToTree(filt(sitesData, filter.filter))
})
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  outline-width: 0px;
  border-width: 0px;
  font-size: 20px;
  font-family: 'Noto Sans', sans-serif;
}

button:hover {
  outline: 0px;
}
</style>
