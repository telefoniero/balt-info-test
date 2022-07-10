import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import FriendsPage from '@/pages/FriendsPage'
import FriendPage from '@/pages/FriendPage'

const routes = [
  { name: 'Home', path: '/', component: HomePage },
  { name: 'Friends', path: '/friends', component: FriendsPage },
  { name: 'Friend', path: '/friends/:id', component: FriendPage }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_ENV),
  routes
})

export default router
