<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import PostCard from '@/components/partials/PostCard.vue'
import LoadingView from '@/components/utils/LoadingView.vue'

import { friendPosts } from '@/global/state'

import getPosts from '@/composables/get/posts'
import useScrollPagination from '@/composables/scrollPagination'
import useLoader from '@/composables/loader'

const props = defineProps({
  id: Number
})

const { isLoading, onLoad, onBeforeLoad } = useLoader()
onMounted(onBeforeLoad)

const { count, offset, step } = useScrollPagination(
  getPosts,
  isLoading,
  props.id
)

onMounted(async () => {
  friendPosts.value = []
  offset.value = step
  count.value = (await getPosts(props.id)).count
  onLoad()
})
</script>

<template>
  <ul class="posts-list">
    <li v-for="post in friendPosts" :key="post.id" class="posts-list__item">
      <PostCard :post="post" />
    </li>
  </ul>
  <LoadingView style="margin-top: 2em" :isLoading="isLoading" />
</template>
