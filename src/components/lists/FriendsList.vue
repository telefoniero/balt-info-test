<script setup>
import UserDetail from '@/components/partials/UserDetail.vue'
import LoadingView from '@/components/utils/LoadingView.vue'
import { RouterLink } from 'vue-router'
import { computed, onMounted, watch } from 'vue'

import { friendsInfo } from '@/global/state'
import { isLoading, onBeforeLoad, onLoad } from '@/composables/watch/friends'
import useScrollPagination from '@/composables/scrollPagination'
import { timeoutAsync } from '@/helpers'

const { count, offset, step, load } = useScrollPagination(
  friendsInfo,
  timeoutAsync(async () => ({ count: friendsInfo.value.length }), 1000),
  isLoading
)

watch(friendsInfo, newInfo => (count.value = newInfo.length))

onMounted(async () => {
  if (!friendsInfo.value.length) offset.value = step
  else load()
})

const paginatedFriendsInfo = computed(() =>
  friendsInfo.value.slice(0, offset.value)
)
</script>

<template>
  <ul class="user-list" v-if="friendsInfo.length">
    <li
      v-for="user in paginatedFriendsInfo"
      :key="user.id"
      class="user-list__item"
    >
      <UserDetail :user="user" />
    </li>
  </ul>
  <template v-else-if="!isLoading">
    <h3 style="margin-bottom: 1em">
      У выбранных пользователей нет друзей, или их профили закрыты!
    </h3>
    <a class="link" @click="$router.back()">Назад</a>
  </template>
  <LoadingView style="margin-top: 1em" :isLoading="isLoading" />
</template>
