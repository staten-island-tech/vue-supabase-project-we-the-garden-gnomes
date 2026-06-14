<template>
  <div class="auth-container">
    <h2>Create an Account</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit" :disabled="loading">
        {{ loading ? 'Registering...' : 'Register' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

const username = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)
const router = useRouter()

const handleRegister = async () => {
  try {
    loading.value = true
    const { data, error } = await supabase.auth.signUp(
      { email: email.value, password: password.value },
      { redirectTo: `${window.location.origin}/home` },
    )

    if (error) throw error

    // Create a profile record if user id is available immediately.
    const userId = data?.user?.id
    if (userId) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({ id: userId, username: username.value })
      if (profileError) console.warn('Profile insert error:', profileError.message)
    } else {
      console.log(
        'User id not returned yet; email confirmation may be required. Create profile after confirmation or on first login.',
      )
    }

    alert('Registration started. Check your email to confirm the account.')
    router.push('/')
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    alert(message)
  } finally {
    loading.value = false
  }
}
</script>
