<script setup>
import { ref, watchEffect } from 'vue'
import PostCard from '@/components/partials/PostCard.vue'
import LoadingView from '@/components/utils/LoadingView.vue'

import getPosts from '@/composables/get/posts'
import useScrollPagination from '@/composables/scrollPagination'

const props = defineProps({
  id: Number
})

const posts = ref([])

watchEffect(async () => {
  const { response, count } = await getPosts(props.id)
  posts.value = response
})

const step = 5

const { isLoading } = useScrollPagination(getPosts, step, props.id)
</script>

<template>
  <ul class="posts-list">
    <li v-for="post in posts" :key="post.id" class="posts-list__item">
      <PostCard :post="post" />
    </li>
  </ul>
  <LoadingView :isLoading="isLoading" />
</template>
