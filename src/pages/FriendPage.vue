<script setup>
import { ref } from 'vue'
import Page from '@/pages/common/Page.vue'
import PageBlock from '@/pages/common/PageBlock.vue'

import UserPanel from '@/components/partials/UserPanel.vue'
import PostsList from '@/components/lists/PostsList.vue'
import LoadingView from '@/components/utils/LoadingView.vue'

import getCommonFriends from '@/composables/get/commonFriends'

const { id, commonFriends } = getCommonFriends()
</script>

<template>
  <Page title="Информация">
    <PageBlock subtitle="В друзьях у:">
      <ul class="user-list">
        <li
          v-for="user in commonFriends"
          :key="user.id"
          class="user-list__item"
        >
          <UserPanel :user="user" />
        </li>
      </ul>
    </PageBlock>
    <PageBlock subtitle="Посты">
      <PostsList :id="id" />
    </PageBlock>
  </Page>
</template>
