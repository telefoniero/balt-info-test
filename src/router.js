import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import UserPage from '@/pages/UserPage'

const routes = [
  { path: '/', component: HomePage },
  { path: '/user', component: UserPage }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_ENV),
  routes
})

export default router
