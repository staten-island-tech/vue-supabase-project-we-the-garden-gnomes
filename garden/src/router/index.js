import { createRouter, createWebHistory } from 'vue-router'
import WaterView from '../views/water.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WaterView,
    },
  ],
})

export default router
