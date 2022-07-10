<script setup>
import Panel from '@/components/utils/Panel.vue'
defineProps({
  post: Object
})
</script>

<template>
  <Panel>
    <a class="post" :href="post.url">
      <p v-if="post.text" v-text="post.text" class="post__text" />
      <ul class="post__attachments" v-if="post.attachments">
        <li
          v-for="attachment of post.attachments"
          :key="post.id + attachment.type"
          class="post__attachment"
        >
          <img
            :src="attachment.item.url"
            class="post__image"
            v-if="attachment.type == 'photo'"
          />
          <div
            v-else-if="attachment.type == 'audio'"
            v-text="attachment.item"
          />
          <!-- etc for videos, docs, ... -->
        </li>
      </ul>
      <ul class="post__info post-info">
        <template
          v-for="key in ['comments', 'likes', 'views', 'reposts']"
          :key="post.id + key"
        >
          <span v-if="post[key]" v-text="post[key]" class="post-info__item" />
        </template>
      </ul>
    </a>
  </Panel>
</template>
