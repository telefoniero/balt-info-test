import { ref, reactive, watch } from 'vue'

const foundUsers = ref([])
const mutualFriends = ref([])
const listedUsers = reactive({})
const friendsInfo = ref([])

export { foundUsers, listedUsers, mutualFriends, friendsInfo }
