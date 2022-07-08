import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import FriendsPage from '@/pages/FriendsPage'
import FriendPage from '@/pages/FriendPage'

const routes = [
  { path: '/', component: HomePage },
  { path: '/friends', component: FriendsPage },
  { path: '/friends/:id', component: FriendPage }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_ENV),
  routes
})

export default router
