<script setup>
import { listedUsers } from '@/global/state'
import { computed } from '@vue/runtime-core'
const listedStr = computed(
  () => `Добавлено: ${Object.keys(listedUsers).length}`
)

function clear() {
  for (const key in listedUsers) {
    delete listedUsers[key]
  }
}
</script>

<template>
  <div class="counter" v-text="listedStr" />
  <button class="button" type="button" @click="clear">Очистить</button>
</template>
