<script setup>
import { mutualFriends, listedUsers } from '@/global/state'
import { computed } from '@vue/runtime-core'
import UsersList from '@/components/lists/UsersList.vue'
import PostsList from '@/components/lists/PostsList.vue'
import { useRoute } from 'vue-router'

const id = useRoute().params.id

const commonFriends = computed(() => {
  const sources = mutualFriends.value.find(f => f.id === +id).sources
  const friends = sources.map(id => listedUsers[id])
  return friends
})
</script>

<template>
  <div class="page">
    <h3 class="page__subtitle">В друзьях у :</h3>
    <UsersList :list="commonFriends" />
    <h3 class="page__subtitle">Посты:</h3>
    <PostsList :id="id" />
  </div>
</template>
