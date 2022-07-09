import { watch } from 'vue'
import { listedUsers, mutualFriends } from '@/global/state'
import getMutual from '@/api/VK/friends/getMutual'

watch(
  () => ({ ...listedUsers }),
  async newUsers => {
    const ids = Object.keys(newUsers)
    mutualFriends.value = await getMutual(ids)
  },
  { immediate: true }
)
