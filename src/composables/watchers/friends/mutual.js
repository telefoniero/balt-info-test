import { watch } from 'vue'
import { listedUsers, mutualFriends } from '@/global/state'
import getMutual from '@/api/VK/friends/getMutual'

watch(
  () => ({ ...listedUsers }),
  async newList => {
    const ids = Object.keys(newList)
    mutualFriends.value = await getMutual(ids)
  },
  { immediate: true }
)
