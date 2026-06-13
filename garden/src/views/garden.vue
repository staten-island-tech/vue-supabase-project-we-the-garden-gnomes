<template>
  <div
    class="relative min-h-screen w-screen flex items-center justify-center p-0 pb-32 bg-blue-100"
  >
    <img
      src="/DirtBackground.png"
      alt="dirt background"
      class="fixed inset-0 w-full h-full object-cover z-8 pointer-events-none"
      aria-hidden="true"
    />
    <img
      src="/GardenFrame.png"
      alt="garden frame"
      class="fixed inset-0 w-[97%] h-[97%] object-cover z-9 scale-[1.03] pointer-events-none"
      style="margin-top: 0.9%; margin-left: 1.5%; transform-origin: center center"
      aria-hidden="true"
    />
    <img
      src="/ShopButton.png"
      alt="shop button"
      class="fixed top-[4%] left-[3%] w-[16%] max-w-[30vw] z-10 pointer-events-auto cursor-pointer"
      role="button"
      tabindex="0"
      @click="openShop"
    />

    <img
      src="/InventoryButton.png"
      alt="inventory button"
      class="fixed top-0 right-48 w-[480px] max-w-[30vw] z-30 pointer-events-auto cursor-pointer"
      role="button"
      tabindex="0"
      @click="openInventory"
    />

    <div class="fixed inset-0 pointer-events-none z-20" aria-hidden="true">
      <img
        v-for="f in flowerStore.floating"
        :key="f.uid"
        :src="f.imageUrl"
        class="absolute w-24 pointer-events-auto touch-none select-none cursor-grab active:cursor-grabbing user-select-none pointer-events-auto"
        :style="{
          left: f.x + 'px',
          top: f.y + 'px',
          transform: 'translate(-50%, -50%) scale(' + (f.scale || 1) + ')',
          animation: 'float-pop 800ms cubic-bezier(0.2, 0.9, 0.3, 1)',
        }"
        @pointerdown="(ev) => startDrag(ev, f)"
        @pointerup="(ev) => handleFlowerClick(ev, f)"
        draggable="false"
        :alt="`floating-${f.uid}`"
      />
    </div>

    <Money />

    <div class="w-full max-w-40 flex flex-nowrap gap-8 items-start justify-between relative z-20">
      <Water />
    </div>

    <div
      v-if="showShop"
      class="fixed inset-0 flex items-start justify-center pt-24 bg-black/25 z-40"
      @click.self="closeShop"
    >
      <div
        class="relative bg-transparent rounded-lg shadow-2xl w-min(960px, 95%) max-h-80vh overflow-auto p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Flower shop"
      >
        <button
          class="absolute right-3 top-1 bg-transparent border-none text-2xl cursor-pointer"
          @click="closeShop"
          aria-label="Close shop"
        >
          ×
        </button>
        <Flowers />
      </div>
    </div>

    <div
      v-if="showInventory"
      class="fixed inset-0 flex items-start justify-center pt-20 bg-black/25 z-40"
      @click.self="closeInventory"
    >
      <div
        class="relative bg-white rounded-lg shadow-2xl w-min(640px, 95%) max-h-80vh overflow-auto p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Inventory"
      >
        <button
          class="absolute right-3 top-1 bg-transparent border-none text-2xl cursor-pointer"
          @click="closeInventory"
          aria-label="Close inventory"
        >
          ×
        </button>
        <Inventory />
      </div>
    </div>

    <div
      class="fixed top-0 right-0 h-screen w-28 bg-amber-900 z-[-1]"
      style="box-shadow: inset 0 8px 0 rgba(255, 255, 255, 0.05)"
      aria-hidden="true"
    ></div>
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
