<script setup>
import { friendsInfo } from '@/global/state'
import UserDetail from '@/components/partials/UserDetail.vue'
</script>

<template>
  <ul class="user-list">
    <li v-for="user in friendsInfo" :key="user.id" class="user-list__item">
      <UserDetail :user="user" />
    </li>
  </ul>
</template>
