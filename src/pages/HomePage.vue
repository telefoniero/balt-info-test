<script setup>
import Page from '@/pages/common/Page.vue'
import PageBlock from '@/pages/common/PageBlock.vue'

import CustomInput from '@/components/UI/CustomInput.vue'
import UsersList from '@/components/lists/UsersList.vue'
import UserCounter from '@/components/partials/UserCounter.vue'

import useUsersSearch from '@/composables/users/search'
import { foundUsers } from '@/global/state'
import { RouterLink } from 'vue-router'
</script>

<template>
  <Page title="Поиск">
    <PageBlock class="top">
      <UserCounter />
      <RouterLink to="/friends" class="link">Построить</RouterLink>
    </PageBlock>

    <PageBlock>
      <CustomInput
        :value="$route.query.search"
        type="text"
        class="input"
        @input="useUsersSearch"
      />
      <UsersList :list="foundUsers" />
    </PageBlock>
  </Page>
</template>

<style scoped>
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
}
</style>
