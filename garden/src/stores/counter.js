import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const waterCount = ref(3)
  const waterPrice = ref(3)
  const totalMoney = ref(0)

  function buyWater() {
    waterCount.value += 1
    totalMoney.value += waterPrice.value
  }

  return {
    waterCount,
    waterPrice,
    totalMoney,
    buyWater,
  }
})
