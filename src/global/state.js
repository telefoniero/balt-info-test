import { ref, reactive } from 'vue'

const foundUsers = ref([])
const mutualFriends = ref([])
const listedUsers = reactive({})
const posts = reactive({})
const friendsInfo = ref([])

export { foundUsers, listedUsers, mutualFriends, friendsInfo, posts }
