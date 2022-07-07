import { reactive } from "vue";
import { ref } from "vue";

const foundUsers = ref([])
const listedUsers = reactive([])

export { foundUsers, listedUsers }