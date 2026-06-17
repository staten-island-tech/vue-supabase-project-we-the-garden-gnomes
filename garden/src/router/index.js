import { createRouter, createWebHistory } from 'vue-router'

import GardenView from '@/views/GardenView.vue'
import SignIn from '@/auth/SignIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/garden',
      name: 'garden',
      component: GardenView,
    },
    {
      path: '/',
      name: 'login',
      component: SignIn,
    },
  ],
})

export default router
