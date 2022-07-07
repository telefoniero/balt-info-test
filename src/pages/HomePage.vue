<script setup>
import CustomInput from '@/components/UI/CustomInput.vue'
import UsersList from '@/components/lists/UsersList.vue'
import UserCounter from '@/components/partials/UserCounter.vue'

import useUsersSearch from '@/composables/users/search'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="page">
    <div class="page__top">
      <UserCounter />
      <RouterLink to="/mutual" class="link">Построить</RouterLink>
    </div>
    <CustomInput type="text" class="input" @input="useUsersSearch" />
    <UsersList />
  </div>
</template>
