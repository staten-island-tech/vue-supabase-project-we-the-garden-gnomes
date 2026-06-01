<template>
  <div class="page">
    <div class="background-photos" aria-hidden="true">
      <img src="/DirtBackground.png" alt="dirt background" class="bg dirt" />
      <img src="/GardenFrame.png" alt="garden frame" class="bg frame" />
      <img src="/ShopButton.png" alt="shop button" class="bg shop" />
    </div>

    <div class="container">
      <Water />
      <Inventory />
      <Flowers />
    </div>

    <div class="dirt-bar" aria-hidden="true"></div>
  </div>
</template>

<script setup>
import Water from '../components/water.vue'
import Inventory from '../components/inventory.vue'
import Flowers from '../components/flowers.vue'
</script>

<style scoped>
.page {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-bottom: 8rem;
}

.background-photos {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1600px;
  height: auto;
  pointer-events: none;
  z-index: 0;
}

.background-photos .bg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  max-width: 100%;
}

.background-photos .dirt {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: auto;
  transform: none;
  width: 100%;
  height: 30vh;
  object-fit: cover;
  z-index: 1;
}

.background-photos .frame {
  z-index: 2;
}

.background-photos .shop {
  z-index: 3;
}

.container {
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-wrap: nowrap;
  gap: 2rem;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  z-index: 5;
}

.container > * {
  flex: 1 1 calc(33.333% - 1.33rem);
  min-width: 280px;
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
