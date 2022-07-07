<script setup>
import CustomInput from '@/components/UI/CustomInput.vue'
import UserPanel from '@/components/panels/UserPanel.vue'
import useUsersSearch from '@/composables/use/users/search'
import { foundUsers } from '@/state/users'
</script>

<template>
  <CustomInput type="text" class="input" @input="useUsersSearch" />
  <ul>
    <li v-for="user in foundUsers" :key="user.id">
      <UserPanel :user="user" />
    </li>
  </ul>
</template>
