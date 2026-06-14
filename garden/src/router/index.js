import { createRouter, createWebHistory } from 'vue-router'
import GardenView from '../views/garden.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GardenView,
    },
  ],
})

export default router

