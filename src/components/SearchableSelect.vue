<script setup>
const { reactive } = require('@vue/reactivity')
import search from '@/api/VK/users/search'

const users = reactive([])

async function searchUsers(evt) {
  const value = evt.target.value
  search(value)
}
</script>

<template>
  <input type="text" class="input" @input="searchUsers" />
  <ul>
    <li v-for="user in users" :key="user">
      <button type="button">user</button>
    </li>
  </ul>
</template>
