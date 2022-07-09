<script setup>
import { foundUsers } from '@/global/state'
import UserSearchPanel from '@/components/panels/UserSearchPanel.vue'

</script>

<template>
  <ul class="user-list">
    <li v-for="user in foundUsers" :key="user.id" class="user-list__item">
      <UserSearchPanel :user="user" />
    </li>
  </ul>
</template>
