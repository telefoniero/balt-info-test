<script setup>
import UserDetail from '@/components/partials/UserDetail.vue'
import LoadingView from '@/components/utils/LoadingView.vue'
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'

import { friendsInfo } from '@/global/state'
import { isLoading, onBeforeLoad, onLoad } from '@/composables/watch/friends'
import getFriendsInfo from '@/composables/get/friendsInfo'
import useScrollPagination from '@/composables/scrollPagination'

const { count, offset, step } = useScrollPagination(getFriendsInfo, isLoading)

onMounted(async () => {
  onBeforeLoad()
  offset.value = step
  friendsInfo.value = []
  count.value = (await getFriendsInfo()).count
  onLoad()
})
</script>

<template>
  <ul class="user-list" v-if="friendsInfo.length">
    <li v-for="user in friendsInfo" :key="user.id" class="user-list__item">
      <UserDetail :user="user" />
    </li>
  </ul>
  <template v-else-if="!isLoading">
    <h3 style="margin-bottom: 1em">
      У выбранных пользователей нет друзей, или их профили закрыты!
    </h3>
    <RouterLink class="link" to="/">Назад</RouterLink>
  </template>
  <LoadingView style="margin-top: 1em" :isLoading="isLoading" />
</template>
