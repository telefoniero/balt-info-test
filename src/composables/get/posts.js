import get from '@/api/VK/wall/get'
import { friendPosts } from '@/global/state'

export default async (id, offset = 0) => {
  const { response: newPosts, count } = await get(id, offset)
  friendPosts.value = [...friendPosts.value, ...newPosts]
  console.log(friendPosts.value)
  return { count }
}
