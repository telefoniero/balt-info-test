<script setup>
import FriendsList from '@/components/lists/FriendsList.vue'
import { watch } from 'vue'
import {posts} from '@/global/state'

import { useRoute } from 'vue-router'

const route = useRoute()

watch(
  () => route.params.id,
  (id) => console.log(id)
)
</script>

<template>
  <div class="page">
    <FriendsList />
  </div>
</template>
