// Utilities
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
	state: () => ({
		navbarShow: true,
		deviceDialogShow: false,
	}),
});
