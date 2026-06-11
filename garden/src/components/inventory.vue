<template>
  <section class="inventory-card">
    <div v-if="flowerStore.inventory.length === 0" class="empty-state">
      No flowers in inventory yet.
    </div>

    <div v-else class="inventory-grid">
      <div
        v-for="item in flowerStore.inventory"
        :key="item.name"
        class="inventory-item"
      >
        <img
          v-if="item.imageUrl"
          :src="item.imageUrl"
          :alt="item.name"
          class="inventory-thumb"
          @error="onImgError"
        />
        <div class="meta">
          <span class="inventory-name">{{ item.name }}</span>
          <span class="inventory-qty">{{ item.quantity }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFlowerStore } from '../stores/flowers'
const flowerStore = useFlowerStore()

function onImgError(ev) {
  ev.target.src = '/images/placeholder.png'
}
</script>

<style scoped>
.inventory-card {
  padding: 1rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
}

.inventory-grid {
  display: grid;
  gap: 0.6rem;
}

.inventory-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 0.9rem;
  border-radius: 0.6rem;
  background: #f8fafc;
}

.inventory-thumb {
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 0.5rem;
  flex-shrink: 0;
}

.meta {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
  width: 100%;
}

.inventory-name {
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.inventory-qty {
  margin-left: auto;
  font-weight: 800;
  color: #2d3748;
}

/* empty state */
.empty-state {
  padding: 0.9rem;
  border-radius: 0.6rem;
  background: #f8fafc;
  color: #64748b;
  text-align: center;
  font-weight: 600;
}
</style>
