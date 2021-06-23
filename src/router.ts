import { h } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import Markdown from './components/Markdown.vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Intro from './views/intro.md'
import Install from './views/install.md'
import GetStarted from './views/get-started.md'
import ButtonDemo from './views/ButtonDemo.vue'

const md = content => h(Markdown, { content })

const history = createWebHashHistory()
const router = createRouter({
	history: history,
	routes: [
		{ path: '/', component: Home },
		{
			path: '/doc',
			component: Doc,
			children: [
				{ path: "", redirect: '/doc/intro' },
				{ path: 'get-started', component: md(GetStarted) },
				{ path: 'install', component: md(Install) },
				{ path: 'intro', component: md(Intro) },
				{ path: 'button', component: ButtonDemo },
			]
		}
	]
})
export default router
