import getQueryString from '@/api/VK/getQueryString'
import collectIds from '@/api/VK/collectIds'
import convertAllFriends from '../converters/allFriends'

export default async function getAll(ids) {
  const requests = []
  if (ids.length === 1) return []
  const idCollections = collectIds(ids)

  const executableQueries = idCollections.map(coll => {
    const VKquery = coll
      .map(id => `API.friends.get({"user_id":${id}})`)
      .toString()
    return `return [${VKquery}];`
  })

  executableQueries.forEach((code, collIndex) => {
    const queryString = getQueryString('execute', { code })

    const request = fetch(queryString)
      .then(res => res.json())
      // adding id only to valid response
      .then(json => {
        json.response = json.response.map((data, idIndex) =>
          data
            ? { ...data, sources: [idCollections[collIndex][idIndex]] }
            : data
        )
        return json
      })
    requests.push(request)
  })

  const response = await Promise.all(requests)
  const result = convertAllFriends(response)
  return result
}
