import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const waterCount = ref(3)
  const waterPrice = ref(3)
  // start user with some balance so purchases are possible
  const totalMoney = ref(100)

  function buyWater() {
    // buying water costs money; prevent if insufficient balance
    if (totalMoney.value < waterPrice.value) {
      return false
    }
    waterCount.value += 1
    totalMoney.value -= waterPrice.value
    return true
  }

  function earnMoney(amount = 0) {
    totalMoney.value += amount
  }

  function spendMoney(amount = 0) {
    if (totalMoney.value < amount) return false
    totalMoney.value -= amount
    return true
  }

  return {
    waterCount,
    waterPrice,
    totalMoney,
    buyWater,
    earnMoney,
    spendMoney,
  }
})
