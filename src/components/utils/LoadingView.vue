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
    <div v-show="isLoading" class="loader__anim">
      <div class="lds-dual-ring" />
    </div>
    <slot />
  </div>
</template>
