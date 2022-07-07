import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import MutualFriendsPage from '@/pages/MutualFriendsPage'

const routes = [
  { path: '/', component: HomePage },
  { path: '/mutual', component: MutualFriendsPage }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_ENV),
  routes
})

export default router
