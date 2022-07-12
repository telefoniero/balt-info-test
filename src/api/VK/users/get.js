import convertUser from '@/api/VK/converters/user'
import getQueryString from '@/api/VK/getQueryString'
import collectIds from '../collectIds'

export default async function (ids) {
  const requests = []
  const idCollections = collectIds(ids)

  const executableQueries = idCollections.map(coll => {
    const VKquery = coll
      .map(
        id =>
          `API.users.get({"user_ids":"${id}","fields": "bdate,sex,counters,photo_50"})`
      )
      .toString()
    return `return [${VKquery}];`
  })

  executableQueries.forEach(query => {
    const queryString = getQueryString('execute', {
      code: query
    })

    const request = fetch(queryString).then(res => res.json())
    requests.push(request)
  })

  const response = await Promise.all(requests)
  const data = response.map(r => r.response).flat(2)
  data.forEach(user => convertUser(user))
  return data
}
