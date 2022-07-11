import { watch } from 'vue'
import { friendsInfo, mutualFriends } from '@/global/state'
import get from '@/api/VK/users/get'

watch(mutualFriends, async newList => {
  const ids = newList.map(friend => friend.id)
  friendsInfo.value = await get(ids)
})
