import { defineStore } from 'pinia'
import { ref } from 'vue'

const useUserStore = defineStore('userStore', () => {
  const uuid = ref('')

  return { uuid }
})

//fix this up, change the variables to what is needed.
