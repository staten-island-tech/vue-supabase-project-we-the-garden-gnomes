import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MyGarden,
    },
    {
      path: '/dirt',
      name: 'dirt',
      component: ,

    },
  ],
})

export default router



let balance = 0.00;
let waterPercentage = 20;

const waterBtn = document.getElementById('waterBtn');
const walletDisplay = document.getElementById('wallet');
const waterLevelDisplay = document.getElementById('waterLevel');
const flowerDisplay = document.getElementById('flower');

// Payout per button press
const payout = 0.10; 

waterBtn.addEventListener('click', () => {
  balance += payout;
  walletDisplay.textContent = `Balance: $${balance.toFixed(2)}`;

  //animating flower height
  if (waterPercentage < 100) {
    waterPercentage += 10;
    waterLevelDisplay.style.height = `${waterPercentage}%`;
  }

//watering
  setTimeout(() => {
    flowerDisplay.style.transform = 'scale(1)';
  }, 300);
});