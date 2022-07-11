import { watch } from 'vue'
import { listedUsers, mutualFriends } from '@/global/state'
import { timeout } from '@/helpers'
import getMutual from '@/api/VK/friends/getMutual'

const updateMutuals = timeout(async newList => {
  const ids = Object.keys(newList)
  mutualFriends.value = await getMutual(ids)
}, 500)

watch(() => ({ ...listedUsers }), updateMutuals)
