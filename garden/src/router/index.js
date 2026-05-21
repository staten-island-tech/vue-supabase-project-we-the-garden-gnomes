import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router


let balance = 0.00;
let waterPercentage = 20; // Starting water level

// DOM Elements
const waterBtn = document.getElementById('waterBtn');
const walletDisplay = document.getElementById('wallet');
const waterLevelDisplay = document.getElementById('waterLevel');
const flowerDisplay = document.getElementById('flower');

// Payout per button press
const payout = 0.10; 

waterBtn.addEventListener('click', () => {
  // 1. Update balance
  balance += payout;
  walletDisplay.textContent = `Balance: $${balance.toFixed(2)}`;

  // 2. Animate the flower growth or water gauge
  if (waterPercentage < 100) {
    waterPercentage += 10;
    waterLevelDisplay.style.height = `${waterPercentage}%`;
  }

  // 3. Visual feedback for watering
  flowerDisplay.style.transform = 'scale(1.2)';
  setTimeout(() => {
    flowerDisplay.style.transform = 'scale(1)';
  }, 300);
});