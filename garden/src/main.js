import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useUserStore } from './stores/auth'
const app = createApp(App)

app.use(createPinia())
app.use(router)

const init = async () => {
  const userStore = useUserStore()
  await userStore.fetchUser()
  app.mount('#app')
}

init()
