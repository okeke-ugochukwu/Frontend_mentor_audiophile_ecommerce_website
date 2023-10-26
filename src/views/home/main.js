import { createApp } from 'vue'
import App from './home.vue'
import router from '@/router'
import store from '@/store'

   
import { createMetaManager } from 'vue-meta'

createApp(App).use(store).use(router).use(createMetaManager()).mount('#app')
