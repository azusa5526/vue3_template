/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: { roboto: ['Roboto'], 'noto-sans-tc': ['Noto Sans TC'] },
			colors: {
				primary: {
					DEFAULT: '#0458a0',
					'light-1': '#8B93A3',
					'light-2': '#737986',
					'dark-1': '#424953',
				},
				secondary: '#377cc1',
				accent: {
					DEFAULT: '#2196F3',
					'dark-1': '#3183A3',
				},
				dark: '#22252A',
				success: '#1B5E20',
				warning: '#FF8F00',
				danger: '#FF3D00',
				error: 'rgb(176,0,32)',
				grey: {
					DEFAULT: '#9E9E9E',
					'lighten-5': '#FAFAFA',
					'lighten-4': '#F5F5F5',
					'lighten-3': '#EEEEEE',
					'lighten-2': '#E0E0E0',
					'lighten-1': '#BDBDBD',
					'darken-1': '#757575',
					'darken-2': '#616161',
					'darken-3': '#424242',
					'darken-4': '#212121',
				},
			},
			padding: {
				4.5: '1.125rem',
				12.5: '3.125rem',
				18: '4.5rem',
			},
			boxShadow: {
				'elevation-0':
					'0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12))',
				'elevation-1':
					'0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12))',
				'elevation-2':
					'0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12))',
				'elevation-3':
					'0px 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 3px 4px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 8px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12))',
				'elevation-4':
					'0px 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 4px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 10px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12))',
				'elevation-5':
					'0px 3px 5px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 5px 8px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 14px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12))',
				'elevation-6':
					'0px 3px 5px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 6px 10px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 18px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12))',
				'elevation-7':
					'0px 4px 5px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 7px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 2px 16px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12))',
				'elevation-8':
					'0px 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12))',
				'elevation-9':
					'0px 5px 6px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 9px 12px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 3px 16px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12))',
				'elevation-10':
					'0px 6px 6px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 10px 14px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 4px 18px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12))',
			},
		},
		screens: {
			sm: '600px',
			md: '960px',
			lg: '1264px',
			xl: '1904px',
		},
	},
	corePlugins: {
		preflight: false,
	},
	plugins: [],
};
