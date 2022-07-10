<script setup>
defineProps({
  title: String
})
</script>

<template>
  <div class="page">
    <h2 class="page__title" v-text="title" v-if="title" />
    <slot />
  </div>
</template>
