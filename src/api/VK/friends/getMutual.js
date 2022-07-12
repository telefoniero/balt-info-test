import getQueryString from '@/api/VK/getQueryString'
import collectIds from '@/api/VK/collectIds'
import convertMutuals from '@/api/VK/converters/mutuals'

export default async function getMutual(ids) {
  const requests = []
  const idCollections = collectIds(ids)

  const executableQueries = idCollections.map(coll => {
    const VKquery = coll
      .map((id, index, array) => {
        const targets = array.slice(index + 1).join(',')
        return `API.friends.getMutual({"source_uid":${id},"target_uids": "${targets}"})`
      })
      .slice(0, -1)
      .toString()
    return `return [${VKquery}];`
  })

  executableQueries.forEach(code => {
    const queryString = getQueryString('execute', { code })

    const request = fetch(queryString).then(res => res.json())
    requests.push(request)
  })

  const response = await Promise.all(requests)
  const result = convertMutuals(response)
  return result
}
