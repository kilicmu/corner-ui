import { createApp } from 'vue'
import Layout from "@/layouts/index.vue"
import './md.css'
import './index.css'
import router from "./router/index";

createApp(Layout)
.use(router)
.mount('#app')
