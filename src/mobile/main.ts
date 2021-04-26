import { createApp } from 'vue'
import Layout from './views/Layout/index.vue'
import DemoBlock from './components/DemoBlock.vue'
import router from './router'

createApp(Layout).component('demo-block', DemoBlock).use(router).mount('#app')
// console.log(1)
