<script setup>
import UserDetail from '@/components/partials/UserDetail.vue'
import LoadingView from '@/components/utils/LoadingView.vue'
import { RouterLink } from 'vue-router'

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
  <template v-else-if="!isLoading">
    <h3 style="margin-bottom: 1em">
      У выбранных пользователей нет друзей, или их профили закрыты!
    </h3>
    <RouterLink class="link" to="/">Назад</RouterLink>
  </template>
  <LoadingView :isLoading="isLoading" />
</template>
