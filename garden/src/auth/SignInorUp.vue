<template>
  <div class="auth-container">
    <h2 class="color-clack">Sign in</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="email" type="email" placeholder="example@example.com" required />
      <button type="submit">Sign In/Up</button>
    </form>
    <p style="margin-top: 12px">
      Don't have an account? <router-link to="/signup">Create one</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'
const email = ref('')
const loading = ref(false)
const handleRegister = async () => {
  try {
    loading.value = true
    console.log(loading.value)
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
