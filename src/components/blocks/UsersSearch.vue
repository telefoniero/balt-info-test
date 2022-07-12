<script setup>
import { watchEffect, ref } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

import router from '@/global/router'
import { timeout } from '@/helpers'

import CustomInput from '@/components/UI/CustomInput.vue'
import UsersList from '@/components/lists/UsersList.vue'
import LoadingView from '@/components/utils/LoadingView.vue'

import useLoader from '@/composables/loader'
import useUsersSearch from '@/composables/users/search'
import useScrollPagination from '@/composables/scrollPagination'

const route = useRoute()
const { isLoading, onLoad, onBeforeLoad } = useLoader()

const search = ref(route.query.search)
const { step, count, offset } = useScrollPagination(
  useUsersSearch,
  isLoading,
  search
)

watchEffect(() => {
  search.value = route.query.search
  offset.value = step
  
  if (search.value) {
    onBeforeLoad()
    useUsersSearch(search.value).then(res => {
      count.value = res.count
      onLoad()
    })
  }
})

const delayedSearch = timeout(router.replace, 1000)
function pushSearch(search) {
  onBeforeLoad()
  delayedSearch({ query: { search } })
}
</script>

<template>
  <CustomInput
    :value="$route.query.search"
    type="text"
    class="input"
    @input="pushSearch"
  />
  <UsersList />
  <LoadingView style="margin-top: 2em" :isLoading="isLoading" />
</template>
