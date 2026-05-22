<template>
  <div><h1>Login</h1></div>
</template>

<script setup>
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
const pinia = createPinia()
const app = createApp(App)

import { ref } from 'vue'
import { supabase } from '../supabase'
const loading = ref(false)
const email = ref('')
const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({ email: email.value })
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

app.use(pinia)
app.mount('#app')
</script>

<style lang="scss" scoped></style>
