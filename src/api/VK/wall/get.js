import getQueryString from '../getQueryString'
import convertPost from '@/api/VK/converters/post'

export default async function (id, offset) {
  const queryString = getQueryString('wall.get', {
    owner_id: id,
    offset
  })
  const res = await fetch(queryString)
  const data = await res.json()
  if (!('response' in data)) {
    return { response: [], count: 0 }
  }

  const posts = data.response.items
  posts.forEach(post => convertPost(post))
  return { response: posts, count: data.response.count }
}
