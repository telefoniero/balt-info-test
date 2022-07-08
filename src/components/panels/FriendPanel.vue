<script setup>
import Panel from '@/components/panels/Panel.vue'
const props = defineProps({
  friend: Object
})
</script>

<template>
  <Panel>{{ friend }}</Panel>
</template>
