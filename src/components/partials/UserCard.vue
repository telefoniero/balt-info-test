<script setup>
import { computed } from 'vue'
import UserPanel from '@/components/partials/UserPanel.vue'
import useUsersToggle from '@/composables/users/toggle'
import userIsListed from '@/composables/getters/users/isListed'

const props = defineProps({
  user: Object
})

const _active = userIsListed(props.user.id)
</script>

<template>
  <UserPanel
    :user="user"
    :class="{ _active }"
    @mousedown="useUsersToggle(user)"
  />
</template>
