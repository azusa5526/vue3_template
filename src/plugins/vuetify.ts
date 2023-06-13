/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import { aliases, md } from 'vuetify/iconsets/md';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
	theme: {
		themes: {
			light: {
				colors: {
					primary: '#0458a0',
					secondary: '#377cc1',
					accent: '#2196F3',
					success: '#1B5E20',
					warning: '#FF8F00',
					danger: '#FF3D00',
				},
			},
		},
	},
	icons: {
		defaultSet: 'md',
		aliases,
		sets: {
			md,
		},
	},
	display: {
		mobileBreakpoint: 'md',
	},
});
