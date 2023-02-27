import Home from "../pages/Home.vue";
import Projects from "../pages/Projects.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/projects',
		name: 'projects',
		component: Projects
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router