<script setup>
import { foundUsers } from '@/global/state'
import UserCard from '@/components/partials/UserCard.vue'

defineProps({
  list: Object
})
</script>

<template>
  <ul class="user-list">
    <li v-for="user in list" :key="user.id" class="user-list__item">
      <UserCard :user="user" />
    </li>
  </ul>
</template>
