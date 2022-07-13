import getQueryString from '@/api/VK/getQueryString'
import collectIds from '@/api/VK/collectIds'
import convertMutuals from '@/api/VK/converters/mutuals'

export default async function getMutual(ids) {
  const requests = []
  if (ids.length === 1) return []
  const idCollections = collectIds(ids)

  const executableQueries = idCollections.map(coll => {
    const VKquery = coll
      .map(id => {
        const targets = coll.filter(i => i !== id).join(',')
        return `API.friends.getMutual({"source_uid":${id},"target_uids": "${targets}"})`
      })
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
  console.log(result)
  return result
}
