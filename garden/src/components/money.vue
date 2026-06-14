<template>
  <section class="money-card">
    <div class="money-header">
      <h1>Garden Bank</h1>
      <p class="money-value">${{ counter.totalMoney }}</p>
    </div>

    <div class="money-stats">
      <div>
        <span class="label">Water</span>
        <span class="value">{{ counter.waterCount }}</span>
      </div>
      <div>
        <span class="label">Price per drop</span>
        <span class="value">${{ counter.waterPrice }}</span>
      </div>
    </div>

    <button class="buy-button" type="button" @click="handleBuyWater">
      Buy 1 water drop for ${{ counter.waterPrice }}
    </button>
  </section>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()

const handleBuyWater = () => {
  if (!counter.buyWater()) {
    alert('Not enough money to buy water.')
  }
}
</script>

<style scoped>
.money-card {
  position: relative;
  width: min(360px, 100%);
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.08);
  color: #000;
}

.money-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.money-header h1 {
  margin: 0;
  font-size: 1.45rem;
}

.money-value {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
}

.money-stats {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.money-stats div {
  display: flex;
  justify-content: space-between;
  padding: 0.9rem 1rem;
  border-radius: 0.85rem;
  background: #f8fafc;
}

.label {
  color: #475569;
  font-weight: 600;
}

.value {
  font-weight: 700;
}

.buy-button {
  width: 100%;
  padding: 0.95rem 1.25rem;
  border: none;
  border-radius: 0.85rem;
  background: #2563eb;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

.buy-button:hover {
  background: #1d4ed8;
}
</style>
