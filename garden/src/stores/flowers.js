import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFlowerStore = defineStore('flower', () => {
  const flowers = ref([
<<<<<<< HEAD
    { name: 'Roses', buyPrice: 10, sellPrice: 15, imageUrl: '/public/Rose.png' },
    { name: 'Tulips', buyPrice: 8, sellPrice: 12, imageUrl: '/public/Tulip.png' },
    { name: 'Sunflowers', buyPrice: 10, sellPrice: 15, imageUrl: '/public/Sunflower.png' },
    { name: 'Orchids', buyPrice: 8, sellPrice: 12, imageUrl: '/public/Orchid.png' },
    { name: 'Lilies', buyPrice: 12, sellPrice: 18, imageUrl: '/public/Lily.png' },
    { name: 'Carnations', buyPrice: 6, sellPrice: 9, imageUrl: '/public/Carnation.png' },
    { name: 'Hydrangeas', buyPrice: 16, sellPrice: 24, imageUrl: '/public/Hydrangea.png' },
    { name: 'Peonies', buyPrice: 8, sellPrice: 12, imageUrl: '/public/Peony.png' },
    { name: 'Daisies', buyPrice: 6, sellPrice: 9, imageUrl: '/public/Daisy.png' },
    { name: 'Chrysanthemums', buyPrice: 20, sellPrice: 30, imageUrl: '/public/Chrysanthemum.png' },
    { name: 'Goldfish Flower', buyPrice: 50, sellPrice: 75, imageUrl: '/public/GoldfishFlower.png' },
=======
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
>>>>>>> JoannaZhangBranch
  ])

  const inventory = ref([])

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

  return {
    flowers,
    inventory,
    addToInventory,
  }
})
