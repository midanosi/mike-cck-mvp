/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'cck-orange': {
					100: '#fae8d9',
					900: '#df6400',
				}
			}
		}
	},

	plugins: [require("daisyui")]
};

module.exports = config;
