<template>
  <div v-if="props.content.type == TreeNodeType.Branch">
    <details open>
      <summary>{{ (props.content.content as TreeBranch).summary }}</summary>
      <treeNode
        v-for="item in (props.content.content as TreeBranch).sons"
        :content="item"
      ></treeNode>
    </details>
  </div>
  <div v-else-if="props.content.type == TreeNodeType.Leaf">
    <a :href="(props.content.content as TreeLeaf).url">{{
      (props.content.content as TreeLeaf).name
    }}</a>
  </div>
</template>

<script setup lang="ts">
import type { TreeBranch, TreeLeaf, TreeNode } from '@/ts/treeNode'
import { TreeNodeType } from '@/ts/treeNode'

const props = defineProps<{
  content: TreeNode
}>()
</script>

<style scoped>
a {
  text-decoration: none;
  color: #15326c;
  margin-left: 20px;
}

details {
  color: #2a2a2a;
  padding: 10px;
}

summary {
  color: #1a1a1a;
  font-size: 22px;
}
</style>
