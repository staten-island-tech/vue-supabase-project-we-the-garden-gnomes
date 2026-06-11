import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFlowerStore = defineStore('flower', () => {
  const flowers = ref([
    { name: 'Roses', buyPrice: 10, sellPrice: 15, imageUrl: '/Rose.png' },
    { name: 'Tulips', buyPrice: 8, sellPrice: 12, imageUrl: '/Tulip.png' },
    { name: 'Sunflowers', buyPrice: 10, sellPrice: 15, imageUrl: '/Sunflower.png' },
    { name: 'Orchids', buyPrice: 8, sellPrice: 12, imageUrl: '/Orchid.png' },
    { name: 'Lilies', buyPrice: 12, sellPrice: 18, imageUrl: '/Lily.png' },
    { name: 'Carnations', buyPrice: 6, sellPrice: 9, imageUrl: '/Carnation.png' },
    { name: 'Hydrangeas', buyPrice: 16, sellPrice: 24, imageUrl: '/Hydrangea.png' },
    { name: 'Peonies', buyPrice: 8, sellPrice: 12, imageUrl: '/Peony.png' },
    { name: 'Daisies', buyPrice: 6, sellPrice: 9, imageUrl: '/Daisy.png' },
    { name: 'Chrysanthemums', buyPrice: 20, sellPrice: 30, imageUrl: '/Chrysanthemum.png' },
    { name: 'Goldfish Plants', buyPrice: 50, sellPrice: 75, imageUrl: '/GoldfishFlower.png' },
  ])

  const inventory = ref([])
  const floating = ref([])

  function addToInventory(flower) {
    const existing = inventory.value.find((item) => item.name === flower.name)
    if (existing) {
      existing.quantity += 1
    } else {
      inventory.value.push({
        name: flower.name,
        quantity: 1,
        imageUrl: flower.imageUrl || '',
      })
    }
  }

  function addFloating({ imageUrl = '', x = 0, y = 0 } = {}) {
    const uid = Date.now().toString() + Math.floor(Math.random() * 1000)
    floating.value.push({ uid, imageUrl, x, y })
  }

  function removeFloating(uid) {
    floating.value = floating.value.filter((f) => f.uid !== uid)
  }

  return {
    flowers,
    inventory,
    addToInventory,
    // floating images rendered in the garden
    floating,
    addFloating,
    removeFloating,
  }
})
