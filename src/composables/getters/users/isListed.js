import { listedUsers } from '@/state'
import { computed } from 'vue'

export default function (id) {
  return computed(() => listedUsers.has(id))
}
