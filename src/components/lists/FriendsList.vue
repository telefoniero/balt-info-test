<script setup>
import UserDetail from '@/components/partials/UserDetail.vue'
import LoadingView from '@/components/utils/LoadingView.vue'

import { friendsInfo } from '@/global/state'
import router from '@/global/router'
import { isLoading } from '@/composables/watch/friends'
</script>

<template>
  <ul class="user-list" v-if="friendsInfo.length && !isLoading">
    <li v-for="user in friendsInfo" :key="user.id" class="user-list__item">
      <UserDetail :user="user" />
    </li>
  </ul>
  <h3 v-else-if="!isLoading">У выбранных пользователей нет общих друзей!</h3>
  <LoadingView :isLoading="isLoading" />
</template>
