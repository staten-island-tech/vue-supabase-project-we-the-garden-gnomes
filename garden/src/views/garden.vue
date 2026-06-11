<template>
  <div class="page">
    <img src="/DirtBackground.png" alt="dirt background" class="bg-dirt" aria-hidden="true" />
    <img src="/GardenFrame.png" alt="garden frame" class="bg-frame" aria-hidden="true" />
    <img src="/ShopButton.png" alt="shop button" class="bg-shop" role="button" tabindex="0" @click="openShop" />

    <div class="top-right-controls" aria-hidden="false">
      <Inventory />
      <Water />
    </div>

    <div v-if="showShop" class="shop-overlay" @click.self="closeShop">
      <div class="shop-panel" role="dialog" aria-modal="true" aria-label="Flower shop">
        <button class="shop-close" @click="closeShop" aria-label="Close shop">×</button>
        <Flowers />
      </div>
    </div>

    <div class="dirt-bar" aria-hidden="true"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Water from '../components/water.vue'
import Inventory from '../components/inventory.vue'
import Flowers from '../components/flowers.vue'

const showShop = ref(false)

function openShop() {
  showShop.value = true
}

function closeShop() {
  showShop.value = false
}
</script>

<style scoped>
.page {
  position: relative;
  background-color: aliceblue;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-bottom: 8rem;
}

.bg-dirt {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 8;
  pointer-events: none;
}

.bg-frame {
  position: fixed;
  inset: 0;
  width: 97%;
  height: 97%;
  object-fit: cover;
  z-index: 9;
  transform: scale(1.03);
  transform-origin: center center;
  pointer-events: none;
}

.bg-shop {
  position: fixed;
  top: 3rem;
  left: 3.5rem;
  width: 275px;
  max-width: 30vw;
  z-index: 10;
  pointer-events: auto;
  cursor: pointer;
}

.top-right-controls {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  z-index: 30;
}

.shop-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 6rem;
  background: rgba(0, 0, 0, 0.25);
  z-index: 40;
}

.shop-panel {
  position: relative;
  background: transparent;
  border-radius: 0.75rem;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
  width: min(960px, 95%);
  max-height: 80vh;
  overflow: auto;
  padding: 1rem;
  background-image: url('/ShopButton.png');
}

.shop-close {
  position: absolute;
  right: 0.75rem;
  top: 0.25rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.dirt-bar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 7rem;
  background: #8b5a2b;
  box-shadow: inset 0 8px 0 rgba(255, 255, 255, 0.05);
  z-index: -1;
}
</style>
