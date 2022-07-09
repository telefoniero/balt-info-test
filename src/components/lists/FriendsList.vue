<script setup>
import { friendsInfo } from '@/global/state'
import UserFriendPanel from '@/components/panels/UserFriendPanel.vue'
</script>

<template>
  <ul class="user-list">
    <li v-for="user in friendsInfo" :key="user.id" class="user-list__item">
      <UserFriendPanel :user="user" />
    </li>
  </ul>
</template>
