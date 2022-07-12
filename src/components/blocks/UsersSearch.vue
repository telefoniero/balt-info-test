<script setup>
import { watchEffect, ref } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

import CustomInput from '@/components/UI/CustomInput.vue'
import UsersList from '@/components/lists/UsersList.vue'
import LoadingView from '@/components/utils/LoadingView.vue'

import useLoader from '@/composables/loader'
import useUsersSearch from '@/composables/users/search'
import { timeoutAsync } from '@/helpers'
import useScrollPagination from '@/composables/scrollPagination'

const { isLoading, onLoad, onBeforeLoad } = useLoader()
const timedOutSearch = timeoutAsync(useUsersSearch, 1500)

function searchUsers(str) {
  onBeforeLoad()
  timedOutSearch(str).then(() => onLoad())
}

const step = 5
const search = ref('')
const { offset } = useScrollPagination(
  useUsersSearch,
  { step, isLoading },
  search
)

const route = useRoute()
watchEffect(() => {
  search.value = route.query.search
  offset.value = step
})
</script>

<template>
  <CustomInput
    :value="$route.query.search"
    type="text"
    class="input"
    @input="searchUsers"
  />
  <UsersList />
  <LoadingView style="margin-top: 2em" :isLoading="isLoading" />
</template>
