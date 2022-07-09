<script setup>
import { listedUsers } from '@/global/state'
import { computed } from '@vue/runtime-core'
const listedStr = computed(
  () => `Добавлено: ${Object.keys(listedUsers).length}`
)
</script>

<template>
  <div class="counter" v-text="listedStr" />
</template>
