<script setup>
import PostCard from '@/components/partials/PostCard.vue'
import { ref, watchEffect } from 'vue'
import getPosts from '@/composables/get/posts'

const props = defineProps({
  id: Number
})

const posts = ref([])

watchEffect(async () => {
  posts.value = await getPosts(props.id)
})
</script>

<template>
  <ul class="posts-list">
    <li v-for="post in posts" :key="post.id" class="posts-list__item">
      <PostCard :post="post" />
    </li>
  </ul>
</template>
