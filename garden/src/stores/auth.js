import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { supabase } from '../supabase'
import router from '@/router'
export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const session = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const isLoggedIn = computed(() => !!user.value)

  async function fetchUser() {
    loading.value = true

    try {
      const { data: urlData, error: urlError } = await supabase.auth.getSessionFromUrl({
        storeSession: true,
      })
      if (urlError && !urlError.message.includes('No session found')) {
        throw urlError
      }

      session.value = urlData?.session ?? null
      if (session.value) {
        user.value = session.value.user
        if (
          window.location.href.includes('access_token') ||
          window.location.href.includes('refresh_token')
        ) {
          window.history.replaceState({}, '', window.location.pathname)
        }
      }

      if (!session.value) {
        const { data, error: sessionError } = await supabase.auth.getSession()
        if (sessionError && !sessionError.message.includes('No session found')) {
          throw sessionError
        }
        session.value = data.session ?? null
        user.value = session.value?.user ?? null
      }
    } catch (err) {
      error.value = err
      console.error('Auth fetchUser error:', err)
    } finally {
      loading.value = false
    }

    return user.value
  }

  async function signOut() {
    const { error: signOutError } = await supabase.auth.signOut()
    if (signOutError) {
      error.value = signOutError
      return false
    }
    user.value = null
    session.value = null
    return true
  }

  supabase.auth.onAuthStateChange((_event, sessionData) => {
    session.value = sessionData?.session ?? null
    user.value = sessionData?.session?.user ?? null
  })

  return {
    user,
    session,
    loading,
    error,
    isLoggedIn,
    fetchUser,
    signOut,
  }
})
supabase.auth.onAuthStateChange((_event, sessionData) => {
  session.value = sessionData?.session ?? null
  user.value = sessionData?.session?.user ?? null

  if (_event === 'SIGNED_IN') {
    router.push({ name: 'home' })
  }
})
