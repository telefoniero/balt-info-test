<script setup>
import { listedUsers } from '@/state'
import { computed } from '@vue/runtime-core'
const listedStr = computed(() => `Добавлено: ${listedUsers.size}`)
</script>

<template>
  <div class="counter" v-text="listedStr" />
</template>