import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { allFriends, listedUsers } from '@/global/state'

export default function () {
  const id = +useRoute().params.id

  const commonFriends = computed(() => {
    const sources = allFriends.value.find(f => f.id === id).sources
    const friends = sources.map(id => listedUsers[id])
    return friends
  })

  return { id, commonFriends }
}
