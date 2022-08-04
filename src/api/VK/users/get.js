import convertUser from '@/api/VK/converters/user'
import getQueryString from '@/api/VK/getQueryString'
import collectIds from '../collectIds'

export default async function (ids) {
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

  const results = []
  let iteratee = []

  for (const code of executableQueries) {
    const queryString = getQueryString('execute', { code })

    const request = fetch(queryString).then(res => res.json())
    iteratee.push(request)

    if (
      iteratee.length === 2 ||
      executableQueries.indexOf(code) == executableQueries.length - 1
    ) {
      results.push(await Promise.all(iteratee))
      iteratee = []
    }
  }

  const resolvedResults = (await Promise.all(results)).flat()
  const data = resolvedResults
    .map(r => r.response)
    .flat(2)
    .filter(r => !!r)

  data.forEach(user => convertUser(user))
  data.sort((a, b) => {
    if (a.fullName < b.fullName) return -1
    if (a.fullName > b.fullName) return 1
  })

  return data
}
