<template>
  <section class="flowers-card">
    <h1>Flower Shop</h1>

    <div class="flower-grid">
      <article v-for="flower in store.flowers" :key="flower.name" class="flower-card">
        <div class="flower-image" v-if="flower.imageUrl">
          <img :src="flower.imageUrl" :alt="flower.name" />
        </div>

        <div class="flower-info">
          <h2>{{ flower.name }}</h2>
          <div class="prices">
            <span>Buy: ${{ flower.buyprices }}</span>
            <span>Sell: ${{ flower.sellprice }}</span>
          </div>
          <button
            class="add-button"
            type="button"
            :disabled="counter.totalMoney < flower.buyprices"
            @click="handleAdd(flower, $event)"
          >
            Add to Inventory
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { useFlowerStore } from '../stores/flowers'
import { useCounterStore } from '../stores/counter'

const store = useFlowerStore()
const counter = useCounterStore()

function handleAdd(flower, ev) {
  // add to inventory as before
  const price = flower.buyprices || 0
  if (counter.totalMoney < price) {
    window.alert('Not enough money to purchase this flower.')
    return
  }
  // charge user and add to inventory
  counter.spendMoney(price)
  store.addToInventory(flower)
  // add a floating visual for feedback, but mark it as not yet eligible to earn on watering
  const x = ev?.clientX ?? Math.max(window.innerWidth - 120, 0)
  const y = ev?.clientY ?? 120
  store.addFloating({ imageUrl: flower.imageUrl || '', x, y, name: flower.name, canEarn: false })
}
</script>

<style scoped>
.flowers-card {
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}

.flowers-card h1 {
  margin-bottom: 1rem;
  font-size: 1.9rem;
}

.flower-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.flower-card {
  padding: 1rem;
  border-radius: 1rem;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.flower-image {
  min-height: 140px;
  border-radius: 1rem;
  overflow: hidden;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flower-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.flower-info h2 {
  margin: 0;
  font-size: 1.15rem;
}

.prices {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 0.75rem;
  font-weight: 600;
  color: #334155;
}

.add-button {
  width: 100%;
  margin-top: 0.9rem;
  padding: 0.85rem 1rem;
  border: none;
  border-radius: 0.85rem;
  background: #2563eb;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
}

.add-button:hover {
  background: #1d4ed8;
}
</style>
