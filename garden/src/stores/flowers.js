import { ref } from 'vue'
import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'

const supabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
)

export const useFlowerStore = defineStore('flower', () => {
  const flowers = ref([])
  const loading = ref(false)

  async function fetchFlowers() {
    loading.value = true
    try {
      const { data, error } = await supabaseClient.from('flowers').select('*')
      if (error) throw error
      flowers.value = data || []
    } catch (error) {
      console.error('Error fetching flowers:', error.message)
    } finally {
      loading.value = false
    }
  }

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
    loading,
    fetchFlowers,
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
