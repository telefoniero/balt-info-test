<script setup>
import { RouterLink, useRoute } from 'vue-router'
import Page from '@/pages/common/Page.vue'
import PageBlock from '@/pages/common/PageBlock.vue'

import CustomInput from '@/components/UI/CustomInput.vue'
import UsersList from '@/components/lists/UsersList.vue'
import UserCounter from '@/components/partials/UserCounter.vue'

import { foundUsers } from '@/global/state'
import { useUsersSearch, useUsersSearchSync } from '@/composables/users/search'
import useScrollPagination from '@/composables/scrollPagination'

import { ref, watchEffect } from '@vue/runtime-core'

const topStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '1em'
}

const route = useRoute()
const search = ref('')
watchEffect(() => (search.value = route.query.search))

useScrollPagination(useUsersSearch, 5, search)
</script>

<template>
  <Page title="Поиск">
    <PageBlock :style="topStyles">
      <UserCounter />
      <RouterLink to="/friends" class="link">Построить</RouterLink>
    </PageBlock>

    <PageBlock>
      <CustomInput
        :value="$route.query.search"
        type="text"
        class="input"
        @input="useUsersSearchSync"
      />
      <UsersList :list="foundUsers" />
    </PageBlock>
  </Page>
</template>
