import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import GardenMain from '@/views/GardenMain.vue'
=======
import GardenView from '../views/garden.vue'

>>>>>>> JoannaZhangBranch
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
<<<<<<< HEAD
      component: GardenMain,
=======
      component: GardenView,
>>>>>>> JoannaZhangBranch
    },
  ],
})

export default router
