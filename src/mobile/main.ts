import { createApp } from 'vue'
import Layout from './views/Layout/index.vue'
import DemoBlock from './components/DemoBlock.vue'
import router from "./router/index"
// import { RoutersBatcher } from '../plugin/RoutersBatcher'

// const batcher = RoutersBatcher.getBatcher();
// batcher.sign(router)
createApp(Layout)
.use(router)
// .use(batcher, !(window as any).__routersBatcher)
.component('demo-block', DemoBlock)
.mount("#mobile-app")