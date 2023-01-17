<template>
  <div v-for="(value, key) in props.items">
    <button
      @click="value"
      class="box-border text-16px p-5px w-100% bg-zinc-300 dark:bg-zinc-800 color-black dark:color-white hover:bg-zinc-700 hover:color-white"
    >
      {{ key }}
    </button>
    <br />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  items: object
}>()
</script>
