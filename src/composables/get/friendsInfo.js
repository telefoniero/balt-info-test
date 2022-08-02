import get from '@/api/VK/users/get'
import { allFriends, friendsInfo } from '@/global/state'

export default async (offset = 0) => {
  const ids = allFriends.value
    .slice(offset, offset + 5)
    .map(friend => friend.id)
  const newInfo = await get(ids)
  friendsInfo.value = [...friendsInfo.value, ...newInfo]
  friendsInfo.value.sort((a, b) => (a.fullName > b.fullName ? 1 : -1))
  return { count: allFriends.value.length }
}
