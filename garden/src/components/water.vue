<template>
  <section class="water-card">
    <div class="button-wrap">
      <img src="/WaterButton.png" alt="Water Button" class="water-button" @click="store.buyWater()" />
    </div>
  </section>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'

const store = useCounterStore()
</script>

<style scoped>
.water-card {
  max-width: 420px;
  margin: 2rem auto;
  padding: 1.75rem;
  border-radius: 1rem;
  background: transparent;
  box-shadow: none;
  text-align: center;
}

.button-wrap {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 50;
  display: block;
}

.water-button {
  width: 120px;
  height: auto;
  cursor: pointer;
  background: transparent;
  display: block;
}
</style>
