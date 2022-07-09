import { createApp } from 'vue'
import App from './App.vue'

import router from '@/global/router'
import '@/assets/scss/main.scss'
import '@/global/watchers'

createApp(App).use(router).mount('#app')
