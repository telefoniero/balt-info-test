import search from '@/api/VK/users/search'
import { foundUsers } from '@/global/state'
import router from '@/global/router'
import { timeout } from '@/helpers'

export const useUsersSearch = async (str, offset = 0) => {
  const { response: newUsers, count } = await search(str, offset)

  if (offset === 0) {
    foundUsers.value = newUsers
    router.push({ path: '/', query: { search: str } })
  } else {
    foundUsers.value = [...foundUsers.value, ...newUsers]
  }

  return { count }
}

export const useUsersSearchSync = timeout(useUsersSearch, 500)
