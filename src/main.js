import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/styles/main.scss'
import '@/assets/fonts/stylesheet.css'

import App from './App.vue'
import router from './router'

let app = createApp(App)
let pinia = createPinia()

app.use(router).use(pinia).mount('#app')
