import { defineStore } from 'pinia';

interface State {
	default: string;
}

export const useDefaultStore = defineStore('default', {
	state: (): State => ({
		default: '',
	}),

	actions: {
		defaultAction() {
			this.default = 'default';
		},
	},
});
