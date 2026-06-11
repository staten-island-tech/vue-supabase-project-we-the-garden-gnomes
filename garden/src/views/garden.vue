<template>
  <div class="page">
    <img src="/DirtBackground.png" alt="dirt background" class="bg-dirt" aria-hidden="true"/>
    <img src="/GardenFrame.png" alt="garden frame" class="bg-frame" aria-hidden="true" />
    <img src="/ShopButton.png" alt="shop button" class="bg-shop" role="button" tabindex="0" @click="openShop" />


    <img
      src="/InventoryButton.png"
      alt="inventory button"
      class="bg-inventory"
      role="button"
      tabindex="0"
      @click="openInventory"
    />

    <div class="floating-layer" aria-hidden="true">
      <img
        v-for="f in flowerStore.floating"
        :key="f.uid"
        :src="f.imageUrl"
        class="floating-flower"
        :style="{ left: f.x + 'px', top: f.y + 'px' }"
        @animationend="flowerStore.removeFloating(f.uid)"
      />
    </div>


    <div class="container">
      <Water />
    </div>


    <div v-if="showShop" class="shop-overlay" @click.self="closeShop">
      <div class="shop-panel" role="dialog" aria-modal="true" aria-label="Flower shop">
        <button class="shop-close" @click="closeShop" aria-label="Close shop">×</button>
        <Flowers />
      </div>
    </div>


    <div v-if="showInventory" class="inventory-overlay" @click.self="closeInventory">
      <div class="inventory-panel" role="dialog" aria-modal="true" aria-label="Inventory">
        <button class="inventory-close" @click="closeInventory" aria-label="Close inventory">×</button>
        <Inventory />
      </div>
    </div>


    <div class="dirt-bar" aria-hidden="true"></div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import Inventory from '../components/inventory.vue'
import Water from '../components/water.vue'
import Flowers from '../components/flowers.vue'
import { useFlowerStore } from '../stores/flowers'


const showShop = ref(false)
const showInventory = ref(false)
const flowerStore = useFlowerStore()


function openShop() {
  showShop.value = true
}


function closeShop() {
  showShop.value = false
}


function openInventory() {
  showInventory.value = true
}


function closeInventory() {
  showInventory.value = false
}
</script>


<style scoped>
.page {
  position: left;
  background-color: aliceblue;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: rem;
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


.bg-dirt {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: auto;
  transform: none;
  width: 100.5%;
  height: 100.5%;
  object-fit: cover;
  z-index: 8;
  pointer-events: none;
}




.bg-frame {
  position: fixed;
  inset: 0;
  margin-top: 0.9%;
  margin-left: 1.5%;
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
  top: 4%;
  left: 3%;
  transform: none;
  transform-origin: top left;
  width: 16%;
  max-width: 30vw;
  z-index: 10;
  pointer-events: auto;
  cursor: pointer;
}


.bg-inventory {
  position: fixed;
  top: 0rem;
  right: 12rem;
  width: 480px;
  max-width: 30vw;
  z-index: 30;
  pointer-events: auto;
  cursor: pointer;
}


.inventory-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 5rem;
  background: rgba(0, 0, 0, 0.25);
  z-index: 40;
}


.inventory-panel {
  position: relative;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
  width: min(640px, 95%);
  max-height: 80vh;
  overflow: auto;
  padding: 1rem;
}


.inventory-close {
  position: absolute;
  right: 0.75rem;
  top: 0.25rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}


.container {
  width: 100%;
  max-width: 160px;
  display: flex;
  flex-wrap: nowrap;
  gap: 2rem;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
    z-index: 20;
}


/* keep original inventory-floating styles in case needed elsewhere */
.inventory-floating {
  top: 1rem;
  right: 1rem;
  width: 330px;
  max-width: 30vw;
  z-index: 30;
  position: relative;
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
  background-image: url("ShopButton.png");
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
/* floating flowers rendered above everything */
.floating-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
}
.floating-flower {
  position: absolute;
  width: 96px;
  height: auto;
  transform: translate(-50%, -50%);
  pointer-events: none;
  animation: float-pop 800ms cubic-bezier(.2,.9,.3,1);
}
@keyframes float-pop {
  0% { transform: translate(-50%, -50%) scale(0.4); opacity: 0 }
  60% { transform: translate(-50%, -70%) scale(1.08); opacity: 1 }
  100% { transform: translate(-50%, -120%) scale(1); opacity: 1 }
}
</style>




