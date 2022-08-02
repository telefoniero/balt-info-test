export default function convertAllFriends(response) {
  const dataArray = response
    .map(r => r.response)
    .flat()
    .filter(r => !!r)
    // convert to object for faster search
    .map(r => {
      const obj = {}
      r.items.forEach(id => (obj[id] = { id, count: 1, sources: r.sources }))
      return obj
    })

  dataArray.sort((a, b) => (a.count >= b.count ? 1 : -1))

  const reduced = dataArray.reduce((prev, curr) => {
    // search in curr friends object
    Object.keys(prev).forEach(id => {
      if (id in curr) {
        curr[id].count += prev[id].count
        curr[id].sources = [...prev[id].sources, curr[id].sources]
      }
    })
    return curr
  })

  return Object.values(reduced)
}
