import { defineStore } from 'pinia'

const UserStore = defineStore('playerStore', () => {
  const uuid = ref('')

  return { uuid }
})

//fix this up, change the variables to what is needed.
