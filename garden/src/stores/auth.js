import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../supabase'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const session = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const isLoggedIn = computed(() => !!user.value)

  async function fetchUser() {
    loading.value = true
    const { data, error: err } = await supabase.auth.getSession()
    if (err) {
      error.value = err
      loading.value = false
      return null
    }

    session.value = data.session
    user.value = data.session?.user ?? null
    loading.value = false
    return user.value
  }

  function setSession(sessionData) {
    session.value = sessionData
    user.value = sessionData?.user ?? null
  }

  async function signOut() {
    const { error: err } = await supabase.auth.signOut()
    if (err) {
      error.value = err
      return false
    }
    user.value = null
    session.value = null
    return true
  }

  supabase.auth.onAuthStateChange((event, authSession) => {
    session.value = authSession?.session ?? null
    user.value = authSession?.session?.user ?? null
  })

  return {
    user,
    session,
    loading,
    error,
    isLoggedIn,
    fetchUser,
    setSession,
    signOut,
  }
})
