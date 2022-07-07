import search from '@/api/VK/users/search'
import { delay } from '@/helpers'
import { foundUsers } from '@/state/users'
import router from '@/router'

const searchUsers = async str => {
  foundUsers.value = await search(str)
  router.push({ path: '/', query: { search: str } })
}

export default delay(searchUsers, 500)
