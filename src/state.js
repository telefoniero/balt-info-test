import { ref, reactive } from 'vue'

const foundUsers = ref([])
const mutualFriends = ref([])
const listedUsers = reactive(new Set())

export { foundUsers, listedUsers, mutualFriends }
