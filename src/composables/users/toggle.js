import { listedUsers } from '@/state/users'

export default function (id) {
  listedUsers.has(id) ? listedUsers.delete(id) : listedUsers.add(id)
}
