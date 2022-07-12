<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { computed, ref, watchEffect } from '@vue/runtime-core'

import Page from '@/pages/common/Page.vue'
import PageBlock from '@/pages/common/PageBlock.vue'

import UsersSearch from '@/components/blocks/UsersSearch.vue'
import UserCounter from '@/components/partials/UserCounter.vue'

const topStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '1em'
}
</script>

<template>
  <Page title="Поиск">
    <PageBlock :style="topStyles">
      <UserCounter />
      <RouterLink to="/friends" class="link">Построить</RouterLink>
    </PageBlock>
    <PageBlock>
      <UsersSearch />
    </PageBlock>
  </Page>
</template>
