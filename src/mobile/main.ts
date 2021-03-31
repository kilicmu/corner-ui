import { createApp } from 'vue'
import Layout from './views/Layout/index.vue'
import router from './router'

console.log(1)
createApp(Layout).use(router).mount('#app')
// console.log(1)
