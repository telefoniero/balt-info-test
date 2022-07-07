import { reactive } from "vue";
import { ref } from "vue";

const foundUsers = ref([])
const listedUsers = reactive(new Set())

export { foundUsers, listedUsers }