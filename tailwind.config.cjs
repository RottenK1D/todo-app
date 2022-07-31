/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{svelte,css}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')]
};
