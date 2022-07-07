import search from '@/api/VK/users/search'
import { delay } from '@/helpers'
import { foundUsers } from '@/state/users'

const searchUsers = async str => (foundUsers.value = await search(str))

export default delay(searchUsers, 500)
