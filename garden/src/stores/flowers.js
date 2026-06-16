import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFlowerStore = defineStore('flower', () => {
  const flowers = ref([
    { name: 'Roses', buyPrice: 10, sellprice: 15, imageUrl: '/Rose.png' },
    { name: 'Tulips', buyPrice: 8, sellprice: 12, imageUrl: '/Tulip.png' },
    { name: 'Sunflowers', buyPrice: 10, sellprice: 15, imageUrl: '/Sunflower.png' },
    { name: 'Orchids', buyPrice: 8, sellprice: 12, imageUrl: '/Orchid.png' },
    { name: 'Lilies', buyPrice: 12, sellprice: 18, imageUrl: '/Lily.png' },
    { name: 'Carnations', buyPrice: 6, sellprice: 9, imageUrl: '/Carnation.png' },
    { name: 'Hydrangeas', buyPrice: 16, sellprice: 24, imageUrl: '/Hydrangea.png' },
    { name: 'Peonies', buyPrice: 8, sellprice: 12, imageUrl: '/Peony.png' },
    { name: 'Daisies', buyPrice: 6, sellprice: 9, imageUrl: '/Daisy.png' },
    { name: 'Chrysanthemums', buyPrice: 20, sellprice: 30, imageUrl: '/Chrysanthemum.png' },
    { name: 'Goldfish Plants', buyPrice: 50, sellprice: 75, imageUrl: '/GoldfishFlower.png' },
  ])

  const inventory = ref([])
  const floating = ref([])
  // when true, the UI is waiting for the user to click a floating flower
  const pendingWaterSelection = ref(false)

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

  function addFloating({ imageUrl = '', x = 0, y = 0, name = '', canEarn = true } = {}) {
    const uid = Date.now().toString() + Math.floor(Math.random() * 1000)
    floating.value.push({ uid, imageUrl, x, y, name, canEarn })
  }

  function startSelection() {
    pendingWaterSelection.value = true
  }

  function stopSelection() {
    pendingWaterSelection.value = false
  }

  // water floating flowers and return total earned amount
  function waterFloating() {
    let earned = 0
    floating.value.forEach((f) => {
      // only award money for floating flowers that are eligible
      if (f.canEarn === false) return
      // try to match by name first, otherwise try by imageUrl
      const match = flowers.value.find((fl) => fl.imageUrl === f.imageUrl || fl.name === f.name)
      if (match) {
        earned += match.sellprice || 0
      } else {
        earned += 1
      }
    })
    return earned
  }

  function removeFloating(uid) {
    floating.value = floating.value.filter((f) => f.uid !== uid)
  }

  // sell one or more items from inventory by name; returns total earned amount
  function sellFromInventory(name, amount = 1) {
    const item = inventory.value.find((i) => i.name === name)
    if (!item || item.quantity <= 0) return 0
    const sellCount = Math.min(amount, item.quantity)
    // find price from flowers list
    const fl = flowers.value.find((f) => f.name === name)
    const price = fl && fl.sellprice ? fl.sellprice : 0
    item.quantity -= sellCount
    if (item.quantity <= 0) {
      // remove item entirely
      const idx = inventory.value.findIndex((i) => i.name === name)
      if (idx >= 0) inventory.value.splice(idx, 1)
    }
    return price * sellCount
  }

  return {
    flowers,
    inventory,
    pendingWaterSelection,
    addToInventory,
    // floating images rendered in the garden
    floating,
    addFloating,
    waterFloating,
    startSelection,
    stopSelection,
    sellFromInventory,
    removeFloating,
  }
})
