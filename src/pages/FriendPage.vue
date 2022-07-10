<script setup>
import { ref } from 'vue'
import Page from '@/pages/common/Page.vue'
import PageBlock from '@/pages/common/PageBlock.vue'

import UsersList from '@/components/lists/UsersList.vue'
import PostsList from '@/components/lists/PostsList.vue'
import getCommonFriends from '@/composables/get/commonFriends'
import useScrollPagination from '@/composables/scrollPagination'

import getPosts from '@/composables/get/posts'

const { id, commonFriends } = getCommonFriends()

useScrollPagination(getPosts, 5, ref(id))
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
