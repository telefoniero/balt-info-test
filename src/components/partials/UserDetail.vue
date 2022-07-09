<script setup>
import Panel from '@/components/utils/Panel.vue'
import LoadingView from '@/components/utils/LoadingView.vue'
import { RouterLink } from 'vue-router'
import useLoader from '@/composables/loader'
import { computed } from 'vue'

const props = defineProps({
  user: Object
})

const { isLoading, onLoad } = useLoader()

const fullName = computed(
  () => `${props.user.first_name} ${props.user.last_name}`
)
</script>

<template>
  <RouterLink :to="{ path: `/friends/${user.id}` }">
    <Panel class="user-panel">
      <LoadingView class="user-panel__image-cont" :isLoading="isLoading">
        <img
          :src="user.photo_50"
          :alt="`${fullName} - Аватар`"
          :onload="onLoad"
        />
      </LoadingView>
      <div class="user-panel__data">
        <span class="user-panel__name">{{ fullName }}</span>
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
      </div>
    </Panel>
  </RouterLink>
</template>
