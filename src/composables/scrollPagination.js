import { fromRefs } from '@/helpers'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const selector = '.page'

export default function (toWatch, callback, loading, ...args) {
  let element
  const step = 5
  const count = ref(0)
  const offset = ref(step)
  const loadedFirst = ref(false)

  function load() {
    const elOffset = Math.floor(element.getBoundingClientRect().bottom)

    if (elOffset <= window.innerHeight) {
      loading.value = true
      offset.value += step
      const params = fromRefs(...args, offset)

      callback(...params).then(res => {
        count.value = res.count
        loading.value = false
        loadedFirst.value = true
      })
    }
  }

  let unwatch
  if (toWatch) {
    unwatch = watch(toWatch, load)
  }

  function scrollHandler() {
    if (loading.value === false && count.value > step) load()
  }

  onMounted(() => {
    element = document.querySelector(selector)
    window.addEventListener('scroll', scrollHandler)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler)
  })

  return { offset, count, step, loadedFirst, load }
}
