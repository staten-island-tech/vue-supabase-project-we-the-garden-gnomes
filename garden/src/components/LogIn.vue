<template>
  <div class="auth-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useRoute } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()
const handleLogin = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) throw error
    alert('Logged in successfully!')
    router.push('/home')
    console.log('User data:', data.user)
  } catch (error) {
    alert(error.message)
  }
}
</script>

<style lang="scss" scoped></style>
