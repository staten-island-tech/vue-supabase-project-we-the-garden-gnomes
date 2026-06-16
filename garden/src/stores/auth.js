import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore(
  'users',
  () => {
    const uuid = ref('')

    return { uuid }
  },
  { persist: true },
)

//fix this up, change the variables to what is needed.
