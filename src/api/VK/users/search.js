import getQueryString from '../getQueryString'

export default async function search(q) {
  const queryString = getQueryString('users.search', { q })
  const res = await fetch(queryString)
  const data = await res.json()
  return data.response.items
}
