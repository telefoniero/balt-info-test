import { arrayIntersection } from '@/helpers'
import getQueryString from '../getQueryString'

export default async function (ids) {
  const idsArr = [...ids]
  const requests = []
  idsArr.forEach((id, index) => {
    const target_uids = idsArr.slice(index + 1).join(',')
    if (target_uids.length) {
      const queryString = getQueryString('friends.getMutual', {
        source_uid: id,
        target_uids
      })

      const request = fetch(queryString).then(res => res.json())
      requests.push(request)
    }
  })

  function mergeCount(array) {
    if (array.length) {
      return array.reduce((acc, curr) => {
        const toReturn = []
        acc.forEach(friend => {
          const found = curr.find(
            fr =>
              friend.id === fr.id &&
              !arrayIntersection(friend.sources, fr.sources).length
          )
          const sources = [...friend.sources, ...(found ? found.sources : [])]
          toReturn.push({
            id: friend.id,
            sources,
            count: sources.length
          })
        })
        return toReturn
      })
    }
    return array
  }

  const response = await Promise.all(requests)
  const result = response.map(r =>
    mergeCount(
      r.response.map(r =>
        r.common_friends.map(id => ({ id, sources: [r.id], count: 1 }))
      )
    )
  )
  const countedResult = mergeCount(result)
  return countedResult
}
