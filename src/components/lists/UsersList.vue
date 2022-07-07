<script setup>
import { foundUsers } from '@/state/users'
import UserSearchPanel from '@/components/panels/users/SearchPanel.vue'

</script>

<template>
  <ul>
    <li v-for="user in foundUsers" :key="user.id" class="li">
      <UserSearchPanel :user="user" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.li {
  margin-bottom: 1em;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
