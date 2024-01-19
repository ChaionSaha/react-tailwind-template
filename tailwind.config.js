/** @type {import('tailwindcss').Config} */
export default {
	content: ['/index.html', './src/**/*.{jsx, tsx, js, ts}'],
	theme: {
		extend: {},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px',
		},
	},
	plugins: [require('daisyui')],
};
