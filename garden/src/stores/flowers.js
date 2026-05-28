import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFlowerStore = defineStore('flower', () => {
  const flowers = ref([
    { name: 'Roses', buyPrice: 10, sellPrice: 15, imageUrl: '' },
    { name: 'Tulips', buyPrice: 8, sellPrice: 12, imageUrl: '' },
    { name: 'Sunflowers', buyPrice: 10, sellPrice: 15, imageUrl: '' },
    { name: 'Orchids', buyPrice: 8, sellPrice: 12, imageUrl: '' },
    { name: 'Lilies', buyPrice: 12, sellPrice: 18, imageUrl: '' },
    { name: 'Carnations', buyPrice: 6, sellPrice: 9, imageUrl: '' },
    { name: 'Hydrangeas', buyPrice: 16, sellPrice: 24, imageUrl: '' },
    { name: 'Peonies', buyPrice: 8, sellPrice: 12, imageUrl: '' },
    { name: 'Daisies', buyPrice: 6, sellPrice: 9, imageUrl: '' },
    { name: 'Chrysanthemums', buyPrice: 20, sellPrice: 30, imageUrl: '' },
    { name: 'Goldfish Plants', buyPrice: 50, sellPrice: 75, imageUrl: '' },
  ])

  return {
    flowers,
  }
})
