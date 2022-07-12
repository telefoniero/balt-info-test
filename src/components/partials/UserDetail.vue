<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import useLoader from '@/composables/loader'
import UserPanel from '@/components/partials/UserPanel.vue'
import useMutualBg from '@/composables/mutualBg'
import { onMounted } from '@vue/runtime-core'

const props = defineProps({
  user: Object
})

const bg = ref('')
onMounted(() => (bg.value = useMutualBg(props.user.id)))
</script>

<template>
  <RouterLink :to="{ path: `/friends/${user.id}` }">
    <UserPanel :user="user" :style="{ backgroundColor: bg, color: '#fff' }">
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
