import { createApp } from 'vue'
// import App from './App.vue'
import Layout from "@/layouts/index.vue"
import './md.css'
import './index.css'
import router from "./router/index";
// import { RoutersBatcher } from './plugin/RoutersBatcher';

// const batcher = RoutersBatcher.getBatcher()
// batcher.sign(router)

createApp(Layout)
.use(router)
// .use(batcher)
.mount('#app')
