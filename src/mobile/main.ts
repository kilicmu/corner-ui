import { createApp } from 'vue'
import Home from './components/Home/index.vue'
import router from './router'

console.log(1)
createApp(Home).use(router).mount('#app')
// console.log(1)
