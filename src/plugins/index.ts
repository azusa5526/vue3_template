import { createPinia } from 'pinia';
import { loadFonts } from './webfontloader';
import vuetify from './vuetify';
import router from '../router';
import { setupCalendar } from 'v-calendar';

// Types
import type { App } from 'vue';

export function registerPlugins(app: App) {
	loadFonts();
	app.use(vuetify).use(router).use(createPinia()).use(setupCalendar, {});
}
