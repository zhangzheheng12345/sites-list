<template>
  <div v-if="props.content.type === TreeNodeType.Branch">
    <details open class="p-10px pl-20px">
      <summary class="text-26px cursor-default color-gray-900">
        {{ (props.content.content as TreeBranch).summary }}
      </summary>
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
    <a
      :href="(props.content.content as TreeLeaf).url"
      :target="browseMode.browserMode ? '_blank' : ''"
      class="decoration-none ml-20px color-blue-600"
      >{{ (props.content.content as TreeLeaf).name }}</a
    >
  </div>
  <div v-else-if="props.content.type === TreeNodeType.ChapterSep">
    <chapterSep>{{ props.content.content as string }}</chapterSep>
  </div>
</template>

<script setup lang="ts">
import type { TreeBranch, TreeLeaf, TreeNode } from '@/ts/treeNode'
import { TreeNodeType } from '@/ts/treeNode'
import { useBrowseMode } from '@/ts/browseMode'

import chapterSep from './chapterSep.vue'

const props = defineProps<{
  content: TreeNode
}>()
const browseMode = useBrowseMode()
</script>

<style scoped>
summary:hover {
  outline: 0px;
}
</style>
