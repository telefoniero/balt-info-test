import { ref } from 'vue'

export default function () {
  const isLoading = ref(true)
  const onLoad = () => (isLoading.value = false)
  return { isLoading, onLoad }
}
