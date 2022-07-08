<script setup>
import { watchEffect } from 'vue'

const props = defineProps({
  value: String
})
const emit = defineEmits(['input'])

watchEffect(() => emit('input', props.value))
</script>

<template>
  <input
    :value="value"
    ref="input"
    type="text"
    @input="$emit('input', $event.target.value)"
  />
</template>
