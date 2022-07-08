<script setup>
import { foundUsers } from '@/state'
import UserPanel from '@/components/panels/UserPanel.vue'

</script>

<template>
  <ul>
    <li v-for="user in foundUsers" :key="user.id" class="li">
      <UserPanel :user="user" />
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
