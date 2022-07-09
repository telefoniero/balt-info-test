import { listedUsers } from '@/global/state'
import { computed } from 'vue'

export default function (id) {
  return computed(() => id in listedUsers)
}
