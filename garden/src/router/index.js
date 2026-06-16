import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

import GardenView from '../views/garden.vue'

import SignInorUp from '@/auth/SignInorUp.vue'

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
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
  ],
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore()

  if (!authStore.user && !authStore.loading) {
    await authStore.fetchUser()
  }

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    return { name: 'login' }
  }

  if (to.name === 'login' && authStore.isLoggedIn) {
    return { name: 'home' }
  }
})

export default router
