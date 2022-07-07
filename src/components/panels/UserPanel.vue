<script setup>
import { computed } from 'vue'
const props = defineProps({
  user: Object
})

const fullName = computed(
  () => `${props.user.first_name} ${props.user.last_name}`
)
</script>

<template>
  
  <span>{{ fullName }}</span>
</template>
