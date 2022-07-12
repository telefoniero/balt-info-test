<script setup>
import Panel from '@/components/utils/Panel.vue'
import LoadingView from '@/components/utils/LoadingView.vue'
import useLoader from '@/composables/loader'
import { computed } from 'vue'

const { isLoading, onLoad } = useLoader()

const props = defineProps({
  user: Object
})
</script>

<template>
  <Panel class="user-panel">
    <LoadingView class="user-panel__image-cont" :isLoading="isLoading">
      <img
        :src="user.photo_50"
        :alt="`${user.fullName} - Аватар`"
        :onload="onLoad"
      />
    </LoadingView>
    <div class="user-panel__data">
      <span class="user-panel__name">{{ user.fullName }}</span>
      <slot />
    </div>
  </Panel>
</template>
