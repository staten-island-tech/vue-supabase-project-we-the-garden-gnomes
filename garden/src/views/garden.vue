<template>
  <div class="page">
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
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-bottom: 8rem;
}

.container {
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-wrap: nowrap;
  gap: 2rem;
  align-items: flex-start;
  justify-content: space-between;
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
