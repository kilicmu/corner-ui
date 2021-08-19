import { createApp } from 'vue'
import Layout from './views/Layout/index.vue'
import DemoBlock from './components/DemoBlock.vue'
import router from "./router/index"

createApp(Layout)
.use(router)
.component('demo-block', DemoBlock)
.mount("#mobile-app")
