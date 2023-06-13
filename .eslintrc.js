module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'plugin:prettier/recommended',
		'eslint-config-prettier',
	],
	rules: {
		'vue/multi-word-component-names': 'off',
		'vue/component-definition-name-casing': ['error', 'kebab-case'],
		'no-unused-vars': 0,
		'no-undef': 'off',
		'no-useless-escape': 0,
		'vue/require-default-prop': 'off',
		'vue/no-lone-template': 'off',
		'vue/require-explicit-emits': 'off',
		'vue/no-template-shadow': 0,
		'@typescript-eslint/no-unused-vars': 0,
	},
	plugins: ['vue', 'prettier'],
};
