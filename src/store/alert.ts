import { defineStore } from 'pinia';
import type { VAlert } from 'vuetify/components/VAlert';
import { isAxiosError } from '@/utils/type-guard';

type AlertTypes = 'info' | 'success' | 'warning' | 'error';

interface AlertOptions {
	title?: string;
	ms?: number;
	type?: AlertTypes;
	single?: string;
	icon?: VAlert['$props']['icon'];
	props?: VAlert['$props'];
}

interface AlertItem extends AlertOptions {
	id: string;
}

export const useAlertStore = defineStore('alert', {
	state: () => ({
		id: 0,
		pool: {} as Record<string, AlertItem>,
	}),

	getters: {
		alerts: (state) => {
			return Object.values(state.pool);
		},
	},

	actions: {
		show(text: string, options: AlertOptions = {}) {
			options.props = options.props ?? {};
			const props = options.props;
			props.closable = props.closable ?? true;
			props.border = props.border ?? 'start';
			props.variant = props.variant ?? 'outlined';
			props.type = options.type ?? 'success';
			props.icon = options.icon ?? false;
			if (options.title) {
				props.title = options.title;
			}
			props.text = text;
			this.create(options);
		},
		create(options: AlertOptions) {
			if (options.single && options.single in this.pool) {
				return;
			}
			const id = options.single || (this.id++).toString();
			if (options.ms) {
				window.setTimeout(() => this.close(id), options.ms);
			}
			this.pool[id] = { ...options, id };
		},
		close(id: string) {
			delete this.pool[id];
		},
		info(text: string, options: AlertOptions = {}) {
			options.ms = options.ms ?? 3600;
			options.type = 'info';
			this.show(text, options);
		},
		success(text: string, options: AlertOptions = {}) {
			options.ms = options.ms ?? 3600;
			options.type = 'success';
			this.show(text, options);
		},
		error(text: string, options: AlertOptions = {}) {
			options.ms = options.ms ?? 3600;
			options.type = 'error';
			this.show(text, options);
		},
		warning(text: string, options: AlertOptions = {}) {
			options.ms = options.ms ?? 3600;
			options.type = 'warning';
			this.show(text, options);
		},
		showError(err: unknown, options: AlertOptions = {}) {
			options.ms = options.ms ?? 7999;
			if (isAxiosError(err)) {
				if (err.response?.data?.error?.message) {
					this.error(err.response.data.error.message, options);
				} else {
					this.error(err.message);
				}
				return;
			}
			if (err instanceof Error) {
				this.error(err.message, options);
				return;
			}
			if (typeof err === 'string') {
				this.error(err, options);
				return;
			}
			console.error(`未被顯示的錯誤消息`, err);
		},
	},
});
