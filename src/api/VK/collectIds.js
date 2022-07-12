export default function (ids) {
  const idCollections = [[]]

  ids.forEach(id => {
    const lastArray = idCollections[idCollections.length - 1]
    if (lastArray.length < 25) lastArray.push(+id)
    else idCollections.push([+id])
  })

  return idCollections
}