<template>
  <div class="auth-container">
    <button class="home-button" @click="goToHome">Home</button>
    <h2 class="color-black">Create an Account</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="email" type="email" placeholder="example@example.com" required />
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createClient } from '@supabase/supabase-js'
const email = ref('')
const router = useRouter()
const supabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
)

const goToHome = () => {
  router.push('/home')
}

const handleRegister = async () => {
  try {
    loading.value = true
    console.log(loading.value)
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
  }
}
</script>
<style scoped>
.home-button {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.home-button:hover {
  background-color: #45a049;
}
</style>
