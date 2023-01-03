<template>
  <treeNode :content="sitesData"></treeNode>
</template>

<script lang="ts" setup>
import { sitesData } from './ts/sitesData'

import treeNode from './components/treeNode.vue'
</script>

<style>
* {
  margin: 0px;
  outline-width: 0px;
  border-width: 0px;
  font-size: 20px;
  font-family: 'Noto Sans', sans-serif;
}

:root {
  padding: 5%;
}
</style>
