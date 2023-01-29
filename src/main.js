import { createApp } from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:"/", component: Home },
        { path:"/collection", component: Home },
        { path:"/about", component: Home },
        { path:"/contact", component: Home },
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')

