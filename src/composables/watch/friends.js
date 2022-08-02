// import updateMutualFriends from '@/composables/update/friends/mutual'
import updateAllFriends from '@/composables/update/friends/all'
import updateFriendsInfo from '@/composables/update/friends/info'
import useLoader from '@/composables/loader'
import { allFriends, listedUsers } from '@/global/state'
import { watch } from 'vue'

const { isLoading, onBeforeLoad, onLoad } = useLoader()

watch(
  () => ({ ...listedUsers }),
  newList => {
    onBeforeLoad()
    const ids = Object.keys(newList)
    updateAllFriends(ids)
  }
)

watch(allFriends, newList => {
  const ids = newList.map(friend => friend.id).slice(0, 10)
  updateFriendsInfo(ids)
})

// watch(mutualFriends, newList => {
//   const ids = newList.map(friend => friend.id)
//   updateFriendsInfo(ids).then(() => onLoad())
// })

export { isLoading, onBeforeLoad, onLoad }
