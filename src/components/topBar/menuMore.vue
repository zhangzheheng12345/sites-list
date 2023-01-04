<template>
  <div v-for="(value, key) in props.items" class="bg-gray-900">
    <button
      @click="value"
      class="box-border text-16px bg-gray-900 text-white p-5px w-100% hover:bg-zinc-700"
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
