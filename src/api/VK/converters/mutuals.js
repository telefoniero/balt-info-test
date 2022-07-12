import { arrayIntersection } from '@/helpers'

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

export default function (response) {
  const filtered = response.map(r => r.response).flat()
  const result = filtered.map(f =>
    mergeCount(
      f.map(f =>
        f.common_friends.map(id => ({ id, sources: [f.id], count: 1 }))
      )
    )
  )
  const countedResult = mergeCount(result)

  return countedResult
}
