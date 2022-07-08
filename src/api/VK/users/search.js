import getQueryString from '../getQueryString'

export default async function (q) {
  const queryString = getQueryString('users.search', {
    q,
    fields: 'photo_50,sex'
  })
  const res = await fetch(queryString)
  const data = await res.json()
  return data.response.items
}
