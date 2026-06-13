<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + Vue 3</h1>
      <p class="description">Sign in via magic link with your email below</p>
      <div>
        <input class="inputField" type="email" placeholder="Your email" v-model="email" />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Send magic link'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { supabase } from '../supabase'

const loading = ref(false)
const email = ref('')
const auth = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        emailRedirectTo: window.location.origin,
      },
    })
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  try {
    const { data, error } = await supabase.auth.getSessionFromUrl()
    if (error) {
      console.error('Supabase auth callback error:', error.message)
      return
    }
    if (data?.session) {
      auth.setSession(data.session)
      await auth.fetchUser()
      await router.replace({ name: 'home' })
    }
  } catch (err) {
    console.error(err)
  }
})
</script>

<style lang="scss" scoped></style>
