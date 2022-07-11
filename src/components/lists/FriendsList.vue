<script setup>
import { friendsInfo } from '@/global/state'
import UserDetail from '@/components/partials/UserDetail.vue'
import router from '@/global/router'
function log(evt) {
  evt.preventDefault()
}
</script>

<template>
  <ul class="user-list" v-if="friendsInfo.length">
    <li v-for="user in friendsInfo" :key="user.id" class="user-list__item">
      <UserDetail :user="user" />
    </li>
  </ul>
  <h3 v-else>У выбранных пользователей нет общих друзей!</h3>
</template>
