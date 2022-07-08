import search from '@/api/VK/users/search'
import { timeout } from '@/helpers'
import { foundUsers } from '@/state'
import router from '@/router'

const searchUsers = async str => {
  foundUsers.value = await search(str)
  router.push({ path: '/', query: { search: str } })
}

export default timeout(searchUsers, 500)
