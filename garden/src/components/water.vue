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

    <button
      class="buy-button"
      @click="store.buyWater()"
      :aria-label="`Buy 1 water droplet for $${store.waterPrice}`"
    >
      <img src="/WaterButton.png" alt="Buy 1 water droplet" />
      <span class="sr-only">Buy 1 water droplet for ${{ store.waterPrice }}</span>
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

/* replaced button styles to use image from public folder */
.buy-button {
  display: inline-block;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: center;
}
.buy-button img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0.85rem;
  pointer-events: none; /* let clicks go to button */
}

/* visually hidden text for screen readers */
.sr-only {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}

/* fallback hover effect if image doesn't include it */
.buy-button:hover {
  transform: translateY(-2px);
  transition: transform 0.12s ease;
}
</style>
