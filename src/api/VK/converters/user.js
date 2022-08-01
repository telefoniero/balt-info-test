import { getAge } from '@/helpers'

export default function convertUser(user) {
  const sexMap = {
    0: 'Не указан',
    1: 'Женский',
    2: 'Мужской'
  }

  if ('bdate' in user) {
    const [day, month, year] = user.bdate.split('.')
    const age = getAge(year, month, day)
    delete user.bdate
    user.age = age
  }

  if ('first_name' in user && 'last_name' in user) {
    user.fullName = `${user.first_name} ${user.last_name}`
  }

  if ('sex' in user) {
    user.sex = sexMap[user.sex]
  }

  if ('counters' in user) {
    if ('friends' in user.counters) {
      user.friends_count = user.counters.friends
      delete user.counters.friends
    }
  }
}
