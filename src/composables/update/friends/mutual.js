import { mutualFriends } from '@/global/state'
import { timeoutAsync } from '@/helpers'
import getMutual from '@/api/VK/friends/getMutual'

export default timeoutAsync(async ids => {
  mutualFriends.value = await getMutual(ids)
}, 500)
