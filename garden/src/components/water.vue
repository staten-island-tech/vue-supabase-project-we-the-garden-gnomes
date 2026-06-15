<template>
  <section class="water-card">
    <div class="button-wrap">
      <img src="/WaterButton.png" alt="Water Button" class="water-button" @click="handleWater" />
    </div>
  </section>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
import { useFlowerStore } from '../stores/flowers'

const counter = useCounterStore()
const flowers = useFlowerStore()

function handleWater() {
  // attempt to buy water; abort if insufficient funds
  const ok = counter.buyWater()
  if (!ok) {
    window.alert('Not enough money to buy water.')
    return
  }
  // instruct user to pick a flower to target for watering
  window.alert('Please pick a flower image on the display to apply water to it.')
  flowers.startSelection()
}
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
