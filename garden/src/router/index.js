import { createRouter, createWebHistory } from 'vue-router'

import GardenView from '../views/garden.vue'
import LoginPage from '../views/LoginPage.vue'
import { useAuthStore } from '../stores/auth'

import SignInorUp from '../auth/SignInorUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
<<<<<<< HEAD
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/',
=======
      path: '/home',
>>>>>>> WinnieWuBranch
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

<<<<<<< HEAD
router.beforeEach(async (to) => {
  const authStore = useAuthStore()
  await authStore.fetchUser()

  if (to.name === 'login' && authStore.isLoggedIn) {
    return { name: 'home' }
  }

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    return { name: 'login' }
  }
})

=======
>>>>>>> WinnieWuBranch
export default router
