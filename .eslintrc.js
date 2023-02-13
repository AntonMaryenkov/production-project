module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:i18next/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'i18next'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'react/react-in-jsx-scope': 'off',
		'react/button-has-type': [2, {
			'button': true,
			'submit': true,
			'reset': true
		}],
		'react/jsx-props-no-spreading': 'warn',
		'no-multiple-empty-lines': ['error', {
			'max': 1,
			'maxEOF': 1,
			'maxBOF': 0
		}],
		'keyword-spacing': ['error', {
			'before': true,
			'after': true
		}],
		'arrow-spacing': 'error',
		'semi-spacing': 'error',
		'block-spacing': 'error',
		'space-unary-ops': 'error',
		'i18next/no-literal-string': ['error', {
			markupOnly: true,
			ignoreAttribute: ['to', 'data-testid']
		}],
		'max-len': ['error', { code: 100, ignoreComments: true }]
	},
	overrides: [
		{
			files: ['**/src/**/*.test.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
			}
		}
	]
};
