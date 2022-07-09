import { watchEffect } from 'vue'
import { friendsInfo, mutualFriends } from '@/global/state'
import get from '@/api/VK/users/get'

watchEffect(async () => {
  const ids = mutualFriends.value.map(friend => friend.id)
  friendsInfo.value = await get(ids)
})
