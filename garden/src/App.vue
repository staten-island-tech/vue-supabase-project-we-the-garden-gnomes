<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth'

const auth = useAuthStore()
const router = useRouter()

const handleSignOut = async () => {
  await auth.signOut()
  await router.push({ name: 'login' })
}
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <div>
        <h1>Garden</h1>
        <p>Grow your garden!!!!!</p>
      </div>
<<<<<<< HEAD
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <span v-if="auth.isLoggedIn" class="mx-4">|</span>
        <RouterLink v-if="!auth.isLoggedIn" to="/login">Login</RouterLink>
        <button v-else @click="handleSignOut" class="logout-button">Logout</button>
      </nav>
=======
>>>>>>> WinnieWuBranch
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  background: linear-gradient(180deg, #eef4ff 0%, #ffffff 100%);
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  gap: 1rem;
}

.app-header h1 {
  margin: 0;
  font-size: 2rem;
}

.app-header p {
  margin: 0.35rem 0 0;
  color: #4b5563;
}

nav a {
  text-decoration: none;
  color: #2563eb;
  font-weight: 600;
}

main {
  padding: 0 2rem 2rem;
}
</style>
