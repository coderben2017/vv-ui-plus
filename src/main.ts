import './index.scss'
import './lib/theme.scss'
import 'github-markdown-css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/svg.js'
import Markdown from './components/Markdown.vue'

const app = createApp(App)

app.component('Markdown', Markdown)

app.use(router)

app.mount('#app')
