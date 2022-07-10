import { handleError, onMounted, onUnmounted } from 'vue'

export default function (callback) {
  const loading = ref(false)
  const counter = 

  function scrollHandler() {
    if (loading.value == false) {
      loading.value = true
      callback().then(() => (loading.value = false))
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', scrollHandler)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler)
  })

  return { loading }
}
