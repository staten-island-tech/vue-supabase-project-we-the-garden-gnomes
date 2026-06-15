import { createRouter, createWebHistory } from 'vue-router'

import GardenView from '../views/garden.vue'

import SignInorUp from '../auth/SignInorUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
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

export default router
