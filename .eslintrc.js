module.exports = {
	'env': {
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'react-hooks'
	],
	'rules': {
		'indent': [
			'error', 'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'key-spacing': [
			2, 
			{
				'beforeColon': false,
				'afterColon': true
			}
		],
		'react-hooks/exhaustive-deps': 'warn',
	},
	'globals': {
		'fetch': false
	}
}
