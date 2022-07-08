<script setup>
import FriendPanel from '@/components/panels/FriendPanel.vue'
import { mutualFriends } from '@/state'
</script>

<template>
  <ul>
    <li v-for="friend in mutualFriends" :key="friend.id" class="li">
      <FriendPanel :friend="friend" />
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
