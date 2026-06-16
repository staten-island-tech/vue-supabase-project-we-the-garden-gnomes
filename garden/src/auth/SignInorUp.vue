<template>
  <div class="auth-container">
    <h2 class="color-black">Sign In/Up</h2>
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
import { supabase } from '../../supabase'
const email = ref('')
<<<<<<< HEAD
const loading = ref(false)
=======
const loading = ref(false);
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
)
>>>>>>> parent of 095b1ad (Merge branch 'JoannaZhangBranch')
const handleRegister = async () => {
  try {
    loading.value = true;
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
    loading.value = false;
  }
}
</script>
<style scoped></style>
