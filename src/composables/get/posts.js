import get from '@/api/VK/wall/get'

export default async (id, offset = 0) => await get(id, offset)
