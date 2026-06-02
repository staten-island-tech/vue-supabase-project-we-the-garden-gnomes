import { createRouter, createWebHistory } from 'vue-router'
import GardenMain from '@/views/GardenMain.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GardenMain,
    },
  ],
})

export default router
