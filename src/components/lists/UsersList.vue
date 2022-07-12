<script setup>
import { foundUsers } from '@/global/state'
import UserCard from '@/components/partials/UserCard.vue'
import { provide } from '@vue/runtime-core'
</script>

<template>
  <ul class="user-list">
    <li v-for="user in foundUsers" :key="user.id" class="user-list__item">
      <UserCard :user="user" />
    </li>
  </ul>
</template>
