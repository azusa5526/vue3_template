import { defineStore } from 'pinia';
import { getDashboards } from '@/api/dashboard';
import { to } from 'await-to-js';

interface State {
	dashboardApps: Awaited<ReturnType<typeof getDashboards>>['data']['result'] | null;
}

export const useDashboardAppsStore = defineStore('dashboardApps', {
	state: (): State => ({
		dashboardApps: null,
	}),

	actions: {
		async getDashboards() {
			const [err, res] = await to(getDashboards());
			if (err) console.error(err);
			if (res) {
				this.dashboardApps = res.data.result;
				this.dashboardApps.items.sort((a, b) => a.order - b.order);
			}
		},
	},
});
