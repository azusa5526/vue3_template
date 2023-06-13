// Composables
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

declare module 'vue-router' {
	interface RouteMeta {
		title?: string;
		auth?: boolean;
	}
}

const routes: readonly RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/layouts/LayoutPrimary.vue'),
		meta: {
			auth: true,
		},
		children: [
			{
				path: 'default',
				name: 'Default',
				component: () => import('@/views/default/Default.vue'),
				meta: {
					auth: false,
				},
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior() {
		return { top: 0 }; // always scroll to top
	},
});

export default router;
