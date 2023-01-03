<template>
  <topBar></topBar>
  <div class="p-5%">
    <treeNode v-for="item in sitesData" :content="item"></treeNode>
  </div>
</template>

<script lang="ts" setup>
import { sitesData } from './ts/sitesData'

import treeNode from './components/mainList/treeNode.vue'
import topBar from './components/topBar.vue'
</script>

<style>
* {
  margin: 0px;
  outline-width: 0px;
  border-width: 0px;
  font-size: 20px;
  font-family: 'Noto Sans', sans-serif;
}
</style>
