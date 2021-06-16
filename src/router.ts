import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'

import {h} from 'vue'
import Markdown from './components/Markdown.vue'
import Intro from './markdown/intro.md'
import Install from './markdown/install.md'
import GetStarted from './markdown/get-started.md'

const md = content => h(Markdown,{content})

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
        path: '/doc', 
        component: Doc,
        children:[
            { path: "", redirect:'/doc/intro' },
            {path:'get-started', component:md(GetStarted)},
            {path:'install', component:md(Install)},
            {path:'intro', component:md(Intro)},
            {path:'switch', component:SwitchDemo},
            {path:'button', component:ButtonDemo},
            {path:'dialog', component:DialogDemo},
            {path:'tabs', component:TabsDemo},
        ]
    }
  ]
})
export default router