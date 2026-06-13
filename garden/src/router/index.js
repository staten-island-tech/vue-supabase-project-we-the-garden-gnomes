import { createRouter, createWebHistory } from 'vue-router'

import GardenView from '../views/garden.vue'
import LoginPage from '../views/LoginPage.vue'
import { useAuthStore } from '../stores/auth'

import SignInorUp from '../auth/SignInorUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: GardenView,
      meta: { requiresAuth: true },
    },
    {
      path: '/',
      name: 'login',
      component: SignInorUp,
    },
  ],
})

export default router
