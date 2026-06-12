<template>
  <section class="inventory-card">
    <h1>Inventory</h1>

    <div class="inventory-grid">
      <div class="inventory-item">
        <span>Water Droplets</span>
        <span>{{ waterStore.waterCount }}</span>
      </div>

      <div v-if="flowerStore.inventory.length === 0" class="empty-state">
        No flowers in inventory yet.
      </div>

      <div v-else>
            <div
              v-for="item in flowerStore.inventory"
              :key="item.name"
              class="inventory-item"
              role="button"
              tabindex="0"
              @click="placeFromInventory(item, $event)"
            >
              <img v-if="item.imageUrl" :src="item.imageUrl" :alt="item.name" class="inventory-thumb" />
              <span class="inventory-name">{{ item.name }}</span>
              <span class="inventory-qty">{{ item.quantity }}</span>
              <button type="button" class="sell-button" aria-label="Sell one {{ item.name }}" @click.stop="sellOne(item)">Sell</button>
            </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFlowerStore } from '../stores/flowers'

import { useCounterStore } from '../stores/counter'

const waterStore = useCounterStore()
const flowerStore = useFlowerStore()

function placeFromInventory(item, ev) {
  const x = ev?.clientX ?? Math.round(window.innerWidth / 2)
  const y = ev?.clientY ?? Math.round(window.innerHeight / 2)
  // placing from inventory should include the item name
  // placed floating items become eligible to earn on watering
  flowerStore.addFloating({ imageUrl: item.imageUrl || '', x, y, name: item.name, canEarn: true })
}

function sellOne(item) {
  const earned = flowerStore.sellFromInventory(item.name, 1)
  if (earned > 0) {
    waterStore.earnMoney(earned)
    // also remove one floating instance of this flower if present
    const floating = flowerStore.floating.find((f) => f.name === item.name || f.imageUrl === item.imageUrl)
    if (floating) {
      flowerStore.removeFloating(floating.uid)
    }
  }
}

</script>

<style scoped>
.inventory-card {
  padding: 1.75rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}

.inventory-card h1 {
  margin-bottom: 1rem;
  font-size: 1.9rem;
}

.inventory-grid {
  display: grid;
  gap: 0.75rem;
}

.inventory-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 1rem;
  border-radius: 0.85rem;
  background: #f8fafc;
  font-weight: 600;
  cursor: pointer;
}

.inventory-thumb {
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 0.5rem;
}

.sell-button {
  margin-left: 0.75rem;
  padding: 0.35rem 0.6rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 700;
  cursor: pointer;
}
.sell-button:focus {
  outline: 2px solid rgba(59,130,246,0.6);
  outline-offset: 2px;
}

.inventory-name {
  font-weight: 600;
}

.inventory-qty {
  margin-left: auto;
  font-weight: 700;
}

.empty-state {
  padding: 1rem;
  border-radius: 0.85rem;
  background: #f8fafc;
  color: #64748b;
}
</style>
