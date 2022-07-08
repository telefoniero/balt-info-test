import { watchEffect } from 'vue'
import { listedUsers, mutualFriends } from '@/state'
import getMutual from '@/api/VK/friends/getMutual'

watchEffect(async () => (mutualFriends.value = await getMutual(listedUsers)))
