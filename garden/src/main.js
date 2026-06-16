import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useUserStore } from './stores/auth'
const app = createApp(App).use(router).mount('#app')

app.use(createPinia())
app.use(router)

const init = async () => {
  const users = useUserStore()
  await users.fetchUser()
  app.mount('#app')
}

init()
