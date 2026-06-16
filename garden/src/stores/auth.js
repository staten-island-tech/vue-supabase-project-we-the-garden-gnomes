import { defineStore } from 'pinia'
<<<<<<< HEAD
import { ref, computed } from 'vue'
import { supabase } from '../supabase'
import router from '@/router'
export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const session = ref(null)
  const loading = ref(false)
  const error = ref(null)
=======
import { ref } from 'vue'

const UserStore = defineStore('userStore', () => {
  const uuid = ref('')
>>>>>>> parent of 095b1ad (Merge branch 'JoannaZhangBranch')

  return { uuid }
})
<<<<<<< HEAD
supabase.auth.onAuthStateChange((_event, sessionData) => {
  session.value = sessionData?.session ?? null
  user.value = sessionData?.session?.user ?? null

  if (_event === 'SIGNED_IN') {
    router.push({ name: 'home' })
  }
})
=======

//fix this up, change the variables to what is needed.
>>>>>>> parent of 095b1ad (Merge branch 'JoannaZhangBranch')
