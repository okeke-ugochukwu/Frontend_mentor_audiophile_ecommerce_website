import { createApp } from 'vue'
import App from './product.vue'
import router from '@/router'
import store from '@/store'
import '@/style/views/home.scss'

   
createApp(App).use(store).use(router).mount('#app')
