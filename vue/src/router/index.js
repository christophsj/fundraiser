import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Types from '@/views/Types.vue'
import Projects from '@/views/Projects.vue'

const routerHistory = createWebHistory()
const routes = [
	{
		path: '/',
		component: Index
	},
	{ path: '/types', component: Types },
	{ path: '/projects', component: Projects }
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router
