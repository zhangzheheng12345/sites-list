<template>
  <div v-if="props.content.type === TreeNodeType.Branch">
    <details open>
      <summary>{{ (props.content.content as TreeBranch).summary }}</summary>
      <treeNode
        v-for="item in (props.content.content as TreeBranch).sons"
        :content="item"
      ></treeNode>
    </details>
  </div>
  <div
    v-else-if="props.content.type === TreeNodeType.Leaf"
    class="hover:scale-102"
  >
    <a :href="(props.content.content as TreeLeaf).url" target="_blank">{{
      (props.content.content as TreeLeaf).name
    }}</a>
  </div>
  <div v-else-if="props.content.type === TreeNodeType.ChapterSep">
    <chapterSep>{{ props.content.content as string }}</chapterSep>
  </div>
</template>

<script setup lang="ts">
import type { TreeBranch, TreeLeaf, TreeNode } from '@/ts/treeNode'
import { TreeNodeType } from '@/ts/treeNode'

import chapterSep from './chapterSep.vue'

const props = defineProps<{
  content: TreeNode
}>()
</script>

<style scoped>
a {
  text-decoration: none;
  color: #0d6cda;
  margin-left: 20px;
}

details {
  color: #2a2a2a;
  padding: 10px;
}

summary {
  color: #1a1a1a;
  font-size: 26px;
  cursor: pointer;
}

summary:hover {
  outline: 0px;
}
</style>
