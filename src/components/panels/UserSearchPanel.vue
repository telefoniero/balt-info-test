<script setup>
import { computed } from 'vue'
import Panel from '@/components/panels/Panel.vue'
import LoadingView from '@/components/utils/LoadingView.vue'
import useUsersToggle from '@/composables/users/toggle'
import useLoader from '@/composables/loader'
import userIsListed from '@/composables/getters/users/isListed'

const props = defineProps({
  user: Object
})

const _active = userIsListed(props.user.id)

const { isLoading, onLoad } = useLoader()

const fullName = computed(
  () => `${props.user.first_name} ${props.user.last_name}`
)
</script>

<template>
  <Panel
    class="user-panel"
    :class="{ _active }"
    @mousedown="useUsersToggle(user)"
  >
    <LoadingView class="user-panel__image-cont" :isLoading="isLoading">
      <img
        :src="user.photo_50"
        :alt="`${fullName} - Аватар`"
        :onload="onLoad"
      />
    </LoadingView>
    <span class="user-panel__name">{{ fullName }}</span>
  </Panel>
</template>
