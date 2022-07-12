import getQueryString from '../getQueryString'
import convertUser from '@/api/VK/converters/user'

export default async function (q, offset = 0) {
  const queryString = getQueryString('users.search', {
    q,
    offset,
    fields: 'photo_50'
  })
  const res = await fetch(queryString)
  const data = await res.json()
  data.response.items.forEach(u => convertUser(u))
  return { response: data.response.items, count: data.response.count }
}
