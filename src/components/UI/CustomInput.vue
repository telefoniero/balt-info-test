<script setup>
defineEmits(['input'])
</script>

<template>
  <input type="text" @input="$emit('input', $event.target.value)" />
</template>
