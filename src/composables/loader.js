import { ref } from 'vue'

export default function () {
  const isLoading = ref(true)
  const onLoad = () => (isLoading.value = false)
  const beforeLoad = () => (isLoading.value = true)
  return { isLoading, onLoad, beforeLoad }
}
