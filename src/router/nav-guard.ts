import router from './index';
import { nextTick } from 'vue';

router.beforeEach(async () => {});

router.afterEach((to) => {
	nextTick(() => {
		document.title = resolveTitle(to.meta.title);
	});
});

function resolveTitle(val: string = 'Template') {
	return `${val} | Template`;
}

router.onError((err, to) => {
	console.error(err);
	if ('message' in err) {
		if (err.message.includes('Failed to fetch dynamically imported module')) {
			const fullpath = to.fullPath[0] === '/' ? to.fullPath.slice(1) : to.fullPath;
			window.location.href = import.meta.env.BASE_URL + fullpath;
		}
		return;
	}
});
