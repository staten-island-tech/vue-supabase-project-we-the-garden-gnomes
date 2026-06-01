import { createRouter, createWebHistory } from 'vue-router'
import GardenView from '../views/garden.vue'
import LoginPage from '@/views/LoginPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/aa',
      name: 'home',
      component: GardenView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
  ],
})

export default router
