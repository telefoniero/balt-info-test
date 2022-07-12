<script setup>
import { onMounted, watch } from 'vue'

const props = defineProps({
  value: String
})
const emit = defineEmits(['input'])
// const input = ref(null)
// watch(
//   () => props.value,
//   newValue => emit('input', newValue),
//   {
//     immediate: props.value
//   }
// )
</script>

<template>
  <input
    :value="value"
    ref="input"
    type="text"
    @input="$emit('input', $event.target.value)"
  />
</template>
