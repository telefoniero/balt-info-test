export default function (post) {
  post.url = `https://vk.com/?w=wall${post.owner_id}_${post.id}%2Fall`

  if ('likes' in post) {
    post.likes = `❤️ ${post.likes.count}`
  }

  if ('views' in post) {
    post.views = `👁️ ${post.views.count}`
  }

  if ('comments' in post) {
    post.comments = `💬 ${post.comments.count}`
  }

  if ('reposts' in post) {
    post.reposts = `🔗 ${post.reposts.count}`
  }

  if ('attachments' in post) {
    post.attachments = post.attachments.map(a => {
      switch (a.type) {
        case 'photo':
          const photo = a.photo.sizes.slice(-3, -2)[0]
          return { type: 'photo', item: photo }

        case 'audio':
          const audio = `🎵 ${a.audio.artist} — ${a.audio.title}`
          return { type: 'audio', item: audio }

        default:
          return a
      }
    })
  }
}
