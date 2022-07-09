<script setup>
import { watch, ref, watchEffect } from 'vue'
import getPosts from '@/composables/get/posts'

const props = defineProps({
  id: String
})

const posts = ref([])

watchEffect(async () => (posts.value = await getPosts(props.id)))
</script>

<template>
  {{ posts }}
</template>
