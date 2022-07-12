import { friendsInfo } from '@/global/state'
import get from '@/api/VK/users/get'

export default async ids => (friendsInfo.value = await get(ids))
