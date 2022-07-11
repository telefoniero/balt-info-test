<script setup>
import { RouterLink } from 'vue-router'
import useLoader from '@/composables/loader'
import UserPanel from '@/components/partials/UserPanel.vue'

const props = defineProps({
  user: Object
})
</script>

<template>
  <RouterLink :to="{ path: `/friends/${user.id}` }">
    <UserPanel :user="user">
      <ul class="user-panel__info user-info">
        <template
          v-for="(name, key) of {
            sex: 'Пол',
            age: 'Возраст',
            friends_count: 'Кол-во друзей'
          }"
          :key="user.id + key"
        >
          <li class="user-info__item" v-if="user[key]">
            <span>{{ name }}</span>
            <span>{{ user[key] }}</span>
          </li>
        </template>
      </ul>
    </UserPanel>
  </RouterLink>
</template>
