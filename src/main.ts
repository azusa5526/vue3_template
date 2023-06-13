/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
// Components
import App from './App.vue';
import SvgIcon from '@/components/SvgIcon.vue';

// Composables
import { createApp } from 'vue';

// Plugins
import { registerPlugins } from '@/plugins';

// Vite svg sprite
import 'virtual:svg-icons-register';

// nav-guard
import '@/router/nav-guard';

// font
import 'material-icons/iconfont/material-icons.css';

import './plugins/install-vee-validate';

const app = createApp(App);

registerPlugins(app);

/** Register global components */
app.component('svg-icon', SvgIcon);
declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		SvgIcon: typeof SvgIcon;
	}
}

// Import tailwind css after vuetify add in app can override vuetify style.
import '@/styles/style.css';

app.mount('#app');
