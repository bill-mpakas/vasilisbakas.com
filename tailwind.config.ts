/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	theme: {
		extend: {
			sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '1rem',
					lg: '1rem',
					xl: '1rem',
					'2xl': '1rem',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
