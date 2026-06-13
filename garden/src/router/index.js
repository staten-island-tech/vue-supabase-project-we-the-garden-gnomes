import { createRouter, createWebHistory } from 'vue-router'
import GardenView from '../views/garden.vue'

import SignInorUp from '../auth/SignInorUp.vue'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
<<<<<<< HEAD
      path: '/home',
=======
      path: '/',
>>>>>>> parent of e22feca (.)
      name: 'home',
      component: GardenView,
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
>>>>>>> parent of e22feca (.)
export default router

