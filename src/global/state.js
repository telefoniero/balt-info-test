import { ref, reactive } from 'vue'

const foundUsers = ref([])
const mutualFriends = ref([])
const listedUsers = reactive({}) // object for searching by key rather than by iterating through array
const friendPosts = ref([])
const friendsInfo = ref([])

export { foundUsers, listedUsers, mutualFriends, friendsInfo, friendPosts }
