/// <reference types="vitest" />
import path from 'path';
import { fileURLToPath, URL } from 'node:url';
// Plugins
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'; // https://github.com/vbenjs/vite-plugin-svg-icons
import { defineConfig } from 'vite';
import type { NodeTransform } from '@vue/compiler-core';

const removeDataTestAttrs: NodeTransform = (node) => {
	const blockAttrs = ['data-test', 'data-testid'];
	if (node.type === 1 /* NodeTypes.ELEMENT */) {
		node.props = node.props.filter((prop) =>
			prop.type === 6 /* NodeTypes.ATTRIBUTE */ ? !blockAttrs.includes(prop.name) : true
		);
	}
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	build: {
		sourcemap: mode === 'staging',
	},
	plugins: [
		vue({
			template: {
				transformAssetUrls,
				compilerOptions: {
					nodeTransforms: mode === 'production' ? [removeDataTestAttrs] : [],
				},
			},
		}),
		// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
		vuetify({
			autoImport: true,
			styles: { configFile: 'src/styles/settings.scss' },
		}),
		createSvgIconsPlugin({
			iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
			symbolId: 'icon-[dir]-[name]',
			inject: 'body-last',
			customDomId: '__svg__icons__dom__',
		}),
	],
	define: { 'process.env': {}, __APP_VERSION__: JSON.stringify(process.env.npm_package_version) },
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'~': fileURLToPath(new URL('./node_modules', import.meta.url)),
			tests: fileURLToPath(new URL('./tests', import.meta.url)),
		},
		extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
	},
	server: {
		port: 8080,
	},
	test: {
		environment: 'happy-dom',
		include: ['src/**/*.spec.ts', 'tests/unit/**.spec.ts'],
		exclude: ['tests/e2e/**/*'],
		coverage: {
			provider: 'istanbul',
			all: true,
			include: ['src/**/*.{ts,js,vue}'],
			exclude: ['src/plugins/**', 'src/assets/**', 'src/styles/**', 'src/main.ts', 'src/App.vue'],
		},
		css: false,
		deps: {
			inline: ['vuetify'],
		},
		setupFiles: 'tests/unit/setup.ts',
	},
}));
