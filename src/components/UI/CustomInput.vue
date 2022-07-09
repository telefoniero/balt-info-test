<script setup>
import { watch } from 'vue'

const props = defineProps({
  value: String
})
const emit = defineEmits(['input'])

watch(
  () => props.value,
  newValue => emit('input', newValue),
  {
    immediate: props.value
  }
)
</script>

<template>
  <input
    :value="value"
    ref="input"
    type="text"
    @input="$emit('input', $event.target.value)"
  />
</template>
