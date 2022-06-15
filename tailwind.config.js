/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./assets/**/*.css",
		"./components/*.{vue,js}",
		"./components/**/*.{vue,js}",
		"./pages/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./*.{vue,js,ts}",
		"./nuxt.config.{js,ts}",
	],
	theme: {
		fontFamily: {
			sans: ["Inter", "sans-serif"],
		},
	},
	plugins: [],
};
