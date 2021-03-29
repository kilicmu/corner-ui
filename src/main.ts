import { createApp } from 'vue'
import Layouts from './layouts/index.vue'
import router from './router'
import '@/styles/main.css'

createApp(Layouts).use(router).mount('#app')
// new Vue({
//   render: (h) => h(Layouts),
// }).$mount('#app')
