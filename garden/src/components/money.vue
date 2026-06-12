<template>
  <div class="money-badge" aria-hidden="false">
    <span class="label">Money</span>
    <span class="amount">${{ total }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCounterStore } from '../stores/counter'

const store = useCounterStore()
const total = computed(() => Number(store.totalMoney).toFixed(0))
</script>

<style scoped>
.money-badge {
  position: fixed;
  top: 0.75rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
  z-index: 60;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-weight: 700;
}
.label {
  color: #374151;
  font-size: 0.85rem;
}
.amount {
  color: #10b981;
  font-size: 1rem;
}
</style>
