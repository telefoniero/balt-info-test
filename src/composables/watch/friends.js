import updateMutualFriends from '@/composables/update/friends/mutual'
import updateFriendsInfo from '@/composables/update/friends/info'
import useLoader from '@/composables/loader'
import { listedUsers, mutualFriends } from '@/global/state'
import { watch } from 'vue'

const { isLoading, onBeforeLoad, onLoad } = useLoader()

watch(
  () => ({ ...listedUsers }),
  newList => {
    onBeforeLoad()
    const ids = Object.keys(newList)
    updateMutualFriends(ids)
  }
)

watch(mutualFriends, newList => {
  const ids = newList.map(friend => friend.id)
  updateFriendsInfo(ids).then(() => onLoad())
})

export { isLoading }
