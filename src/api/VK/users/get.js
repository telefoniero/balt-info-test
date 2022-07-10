import convertUser from '@/api/VK/converters/user'
import getQueryString from '../getQueryString'

export default async function (ids) {
  const queryString = getQueryString('users.get', {
    user_ids: ids.join(','),
    fields: 'bdate,sex,counters,photo_50'
  })

  const res = await fetch(queryString)
  const data = await res.json()
  
  data.response.forEach(user => convertUser(user))
  return data.response
}
