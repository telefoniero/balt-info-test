<script setup>
defineProps({
  subtitle: String
})
</script>

<template>
  <div class="page__block">
    <h3 class="page__subtitle" v-if="subtitle" v-text="subtitle" />
    <slot />
  </div>
</template>
