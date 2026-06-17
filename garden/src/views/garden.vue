<!-- <template>
  <div class="page">
    <img src="/DirtBackground.png" alt="dirt background" class="bg-dirt" aria-hidden="true"/>
    <img src="/GardenFrame.png" alt="garden frame" class="bg-frame" aria-hidden="true" />
    <img src="/ShopButton.png" alt="shop button" class="bg-shop" role="button" tabindex="0" @click="openShop" />

    <div class="inventory-floating" aria-hidden="false">
      <Inventory />
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
  top: 3rem;
  left: 3.5rem;
  transform: none;
  transform-origin: top left;
  width: 275px;
  max-width: 30vw;
  z-index: 10;
  pointer-events: auto;
  cursor: pointer;
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
    z-index: 20;
}

.inventory-floating {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 320px;
  max-width: 30vw;
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
</style> -->
<template>
  <div class="page">
    <img src="/DirtBackground.png" alt="dirt background" class="bg-dirt" aria-hidden="true" />
    <img src="/GardenFrame.png" alt="garden frame" class="bg-frame" aria-hidden="true" />
    <img
      src="/ShopButton.png"
      alt="shop button"
      class="bg-shop"
      role="button"
      tabindex="0"
      @click="openShop"
    />

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
        :style="{
          left: f.x + 'px',
          top: f.y + 'px',
          transform: 'translate(-50%, -50%) scale(' + (f.scale || 1) + ')',
        }"
        @pointerdown="(ev) => startDrag(ev, f)"
        @pointerup="(ev) => handleFlowerClick(ev, f)"
        draggable="false"
        :alt="`floating-${f.uid}`"
      />
    </div>

    <Money />

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
        <button class="inventory-close" @click="closeInventory" aria-label="Close inventory">
          ×
        </button>
        <Inventory />
      </div>
    </div>

    <div class="dirt-bar" aria-hidden="true"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Inventory from '../components/inventory.vue'
import Water from '../components/water.vue'
import Flowers from '../components/flowers.vue'
import Money from '../components/money.vue'
import { useFlowerStore } from '../stores/flowers'
import { useCounterStore } from '../stores/counter'

const showShop = ref(false)
const showInventory = ref(false)
const flowerStore = useFlowerStore()
const counter = useCounterStore()

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

// dragging state for floating flowers
const draggingUid = ref(null)
const dragOffset = ref({ x: 0, y: 0 })

function startDrag(ev, f) {
  ev.preventDefault()
  draggingUid.value = f.uid
  dragOffset.value.x = ev.clientX - f.x
  dragOffset.value.y = ev.clientY - f.y
  try {
    ev.target.setPointerCapture && ev.target.setPointerCapture(ev.pointerId)
  } catch (e) {}
}

function handleFlowerClick(ev, f) {
  // if we're waiting for a flower selection from the Water button,
  // consume the click and add water
  if (flowerStore.pendingWaterSelection) {
    // add water resource and reward money for watering a selected flower
    counter.addWater(5)
    counter.earnMoney(5)
    f.scale = (f.scale || 1) * 1.5
    flowerStore.stopSelection()
    window.alert('Added 5 water to your total and earned $5.')
    ev.stopPropagation()
    return
  }
}

function onPointerMove(ev) {
  if (!draggingUid.value) return
  const f = flowerStore.floating.find((ff) => ff.uid === draggingUid.value)
  if (!f) return
  f.x = ev.clientX - dragOffset.value.x
  f.y = ev.clientY - dragOffset.value.y
}

function endDrag(ev) {
  if (!draggingUid.value) return
  try {
    ev.target.releasePointerCapture && ev.target.releasePointerCapture(ev.pointerId)
  } catch (e) {}
  draggingUid.value = null
}

onMounted(() => {
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', endDrag)
})

onUnmounted(() => {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', endDrag)
})
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
  top: 5.5%;
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
  top: 1%;
  right: 10%;
  width: 26%;
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
  background-image: url('ShopButton.png');
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
  /* allow pointer events to pass through the empty areas of the layer */
  pointer-events: none;
  /* keep floating images above background but below overlays (shop/inventory) */
  z-index: 20;
}
.floating-flower {
  position: absolute;
  width: 96px;
  height: auto;
  transform: translate(-50%, -50%);
  /* flowers themselves should receive pointer events */
  pointer-events: auto;
  touch-action: none;
  user-select: none;
  cursor: grab;
  -webkit-user-drag: none;
  animation: float-pop 800ms cubic-bezier(0.2, 0.9, 0.3, 1);
}
.floating-flower:active {
  cursor: grabbing;
}
@keyframes float-pop {
  0% {
    transform: translate(-50%, -50%) scale(0.4);
    opacity: 0;
  }
  60% {
    transform: translate(-50%, -70%) scale(1.08);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -120%) scale(1);
    opacity: 1;
  }
}
</style>
