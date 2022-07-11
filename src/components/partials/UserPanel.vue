<script setup>
import Panel from '@/components/utils/Panel.vue'
import LoadingView from '@/components/utils/LoadingView.vue'
import useLoader from '@/composables/loader'
import { computed } from 'vue'

const { isLoading, onLoad } = useLoader()

const props = defineProps({
  user: Object
})

const fullName = computed(
  () => `${props.user.first_name} ${props.user.last_name}`
)
</script>

<template>
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
      <slot />
    </div>
  </Panel>
</template>
