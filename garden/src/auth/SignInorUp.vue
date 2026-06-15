<template>
  <div class="auth-container">
    <h2>Create an Account</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="email" type="email" placeholder="example@example.com" required />
      <button type="submit" :class="{ loading: loading }" :disabled="loading">
        {{ loading ? 'Sending Magic Link...' : 'Sign In' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabaseClient } from '@supabase/supabase-js'
const email = ref('')
const loading = ref(false)
const supabaseClient = useSupabaseClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
)
const handleRegister = async () => {
  try {
    loading.value = true
    const { data, error } = await supabaseClient.auth.signInWithOtp({
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
