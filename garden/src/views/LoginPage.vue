<!-- <template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">Garden</h1>
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
import { ref } from 'vue'
import { supabase } from '../supabase'

const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({ email: email.value , 
      options:{
        emailRedirectTo: 'http://localhost:5173/login'
      }
    })
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error) {
    if (error instanceof Error) {
      console.log(error)
      alert(error)
    }
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped></style> -->
<template>
  <div class="auth-container">
    <h2 class="color-black">Sign In/Up</h2>
    <form @submit.prevent="handleRegister()">
      <input v-model="email" type="email" placeholder="example@example.com" required />
      <button type="submit" :class="{ loading: loading }" :disabled="loading">
        {{ loading ? 'Sending Magic Link...' : 'Sign In' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/supabase'
const email = ref('')
const loading = ref(false)
async function handleRegister() {
  try {
    loading.value = true
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        emailRedirectTo: `${window.location.origin}/home`,
      },
    })

    if (error) throw error
    alert('Registration successful! Please check your email for a confirmation link.')
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>
<style scoped></style>
