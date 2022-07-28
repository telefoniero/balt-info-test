import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import FriendsPage from '@/pages/FriendsPage'
import FriendPage from '@/pages/FriendPage'

const routes = [
  { name: 'Home', path: '/', component: HomePage },
  {
    name: 'Friends',
    path: '/friends',
    component: FriendsPage,
    beforeEnter: (to, from) => {
      if (from.name !== 'Home') return { name: 'Home' }
    }
  },
  {
    name: 'Friend',
    path: '/friends/:id',
    component: FriendPage,
    beforeEnter: (to, from) => {
      if (from.name !== 'Friends') return { name: 'Home' }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_ENV),
  routes
})

export default router
