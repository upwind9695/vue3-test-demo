import App from './App.vue'
import store from './stores'
import router from './router'
import i18n from "@/i18n"
import { createApp } from 'vue'
import { loadPlugins } from "@/plugins"
import { loadDirectives } from "@/directives"
import '@/router/auth'
import 'normalize.css'
import '@/assets/styles/index.scss'
const app = createApp(App)
loadPlugins(app)
loadDirectives(app)
app.use(i18n).use(store).use(router).mount('#app')
