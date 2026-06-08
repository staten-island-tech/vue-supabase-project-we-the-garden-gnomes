<template>
  <div class="auth-container">
    <h2>Create an Account</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

const email = ref('')
const password = ref('')

const handleRegister = async () => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    })
    
    if (error) throw error
    alert('Registration successful! Please check your email for a confirmation link.')
  } catch (error) {
    alert(error.message)
  }
}
</script>
