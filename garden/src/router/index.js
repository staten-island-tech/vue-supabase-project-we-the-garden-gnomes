import { createRouter, createWebHistory } from 'vue-router'
import GardenView from '../views/garden.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/protected',
      name: 'protected',
      component: ProtectedRoute,
      meta: { requiresAuth: true },
    },
    {
      path: '/',
      name: 'home',
      component: GardenView,
    },
  ],
})

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth) {
    const authStore = useAuthStore()
    await authStore.fetchUser()
    if (!authStore.isLoggedIn) {
      return { name: 'login' }
    }
  }
})
export default router
