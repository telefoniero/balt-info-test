import { allFriends } from "@/global/state";
import { timeoutAsync } from "@/helpers";
import getAll from "@/api/VK/friends/getAll";

export default timeoutAsync(async ids => {
  allFriends.value = await getAll(ids)
}, 500)
