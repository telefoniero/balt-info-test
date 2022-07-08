import { listedUsers } from '@/state'

export default function (id) {
  if (listedUsers.has(id)) listedUsers.delete(id)
  else listedUsers.add(id)
}
