<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="loader">
    <div class="loader__anim" v-show="isLoading"></div>
    <slot />
  </div>
</template>
