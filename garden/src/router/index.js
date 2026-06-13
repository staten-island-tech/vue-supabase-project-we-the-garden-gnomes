import { createRouter, createWebHistory } from 'vue-router'
import GardenView from '../views/garden.vue'
<<<<<<< HEAD
import SignInorUp from '../auth/SignInorUp.vue'
import { useAuthStore } from '../stores/auth'
=======
>>>>>>> parent of 0f002a5 (Merge branch 'WinnieWuBranch')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: GardenView,
    },
<<<<<<< HEAD
    {
      path: '/',
      name: 'login',
      component: SignInorUp,
    },
=======
>>>>>>> parent of 0f002a5 (Merge branch 'WinnieWuBranch')
  ],
})

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

export default router

