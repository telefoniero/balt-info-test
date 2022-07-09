import getQueryString from '../getQueryString'

export default async function (id) {
  const queryString = getQueryString('wall.get', {
    owner_id: id
  })
  const res = await fetch(queryString)
  const data = await res.json()
  return data
}
