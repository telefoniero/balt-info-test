import { listedUsers } from '@/global/state'

export default function (user) {
  if (user.id in listedUsers) {
    delete listedUsers[user.id]
  } else {
    listedUsers[user.id] = user
  }
}
