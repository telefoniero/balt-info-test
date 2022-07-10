<script setup>
import Page from '@/pages/common/Page.vue'
import PageBlock from '@/pages/common/PageBlock.vue'

import UsersList from '@/components/lists/UsersList.vue'
import PostsList from '@/components/lists/PostsList.vue'
import getCommonFriends from '@/composables/get/commonFriends'

const { id, commonFriends } = getCommonFriends()
</script>

<template>
  <Page title="Информация">
    <PageBlock subtitle="В друзьях у:">
      <UsersList :list="commonFriends" />
    </PageBlock>
    <PageBlock subtitle="Посты">
      <PostsList :id="id" />
    </PageBlock>
  </Page>
</template>
