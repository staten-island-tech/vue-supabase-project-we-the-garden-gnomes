<template>
  <section class="water-card">
    <h1>Water</h1>

    <div class="stats">
      <div>
        <span class="label">Water droplets</span>
        <span class="value">{{ store.waterCount }}</span>
      </div>
      <div>
        <span class="label">Price per drop</span>
        <span class="value">${{ store.waterPrice }}</span>
      </div>
      <div>
        <span class="label">Total money</span>
        <span class="value">${{ store.totalMoney }}</span>
      </div>
    </div>

    <div class="droplets" aria-label="Water droplets">
      <span v-for="n in displayCount" :key="n" class="droplet">💧</span>
      <span v-if="store.waterCount > displayCount" class="more">+{{ store.waterCount - displayCount }} more</span>
    </div>

    <button class="buy-button" @click="store.buyWater()">
      Buy 1 water droplet for ${{ store.waterPrice }}
    </button>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useCounterStore } from '../stores/counter'

const store = useCounterStore()
const displayCount = computed(() => Math.min(store.waterCount, 10))
</script>

<style scoped>
.water-card {
  max-width: 420px;
  margin: 2rem auto;
  padding: 1.75rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.water-card h1 {
  margin-bottom: 1.25rem;
  font-size: 1.85rem;
}

.stats {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.stats div {
  display: flex;
  justify-content: space-between;
  padding: 0.85rem 1rem;
  border-radius: 0.85rem;
  background: #f5f9ff;
}

.label {
  color: #4a5568;
  font-size: 0.95rem;
}

.value {
  font-weight: 700;
}

.droplets {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.35rem;
}

.more {
  align-self: center;
  color: #2d3748;
  font-weight: 600;
}

.buy-button {
  width: 100%;
  padding: 0.95rem 1.25rem;
  border: none;
  border-radius: 0.85rem;
  background: #2563eb;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

.buy-button:hover {
  background: #1d4ed8;
}
</style>
