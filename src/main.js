import { createApp } from 'vue'
import App from './App.vue'

import router from '@/global/router'
import '@/assets/scss/main.scss'

createApp(App).use(router).mount('#app')
