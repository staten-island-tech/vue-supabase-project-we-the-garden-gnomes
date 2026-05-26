import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MyGarden,
    },
  ],
})

export default router



let balance = 0.00;
let waterAmount = 3 ;

const waterBtn = document.getElementById('waterBtn');
const walletDisplay = document.getElementById('wallet');
const waterDisplay = document.getElementById('water');
const flowerDisplay = document.getElementById('flower');

//pay amount per button press
const payout = 0.10; 

waterBtn.addEventListener('click', () => {
  balance += payout;
  walletDisplay.textContent = `Balance: $${balance.toFixed(2)}`;

  //watering

  if (waterAmount < 100) {
    waterPercentage += 10;
    waterDisplay.style.height = `{waterAmount}`;
  }

  //animating flower height

  setTimeout(() => {
    flowerDisplay.style.transform = 'scale(1)';
  }, 300);
});