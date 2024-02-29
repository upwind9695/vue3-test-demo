import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import store from './stores'
import router from './router'
import { loadPlugins } from "@/plugins"

const app = createApp(App)
loadPlugins(app)
app.use(store).use(router).mount('#app')
