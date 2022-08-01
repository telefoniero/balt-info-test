import { allFriends } from '@/global/state'
import { watch } from 'vue'

const bounds = {
  min: 1,
  max: 1
}

const blue = a => `rgba(73, 127, 235, ${a})`

watch(allFriends, newList => {
  const counts = newList.map(l => l.count)
  bounds.min = Math.min(...counts)
  bounds.max = Math.max(...counts)
})

export default function (id) {
  if (bounds.min == bounds.max) return blue(1)
  const count = allFriends.value.find(i => i.id == id).count
  const opacity = (count - bounds.min) / 2 / (bounds.max - bounds.min) + 0.5
  return blue(opacity)
}
