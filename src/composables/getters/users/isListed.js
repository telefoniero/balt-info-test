import { listedUsers } from '@/state/users'
import { computed } from 'vue'

export default function (id) {
  return computed(() => listedUsers.has(id))
}
