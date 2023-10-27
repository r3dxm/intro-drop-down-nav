/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			desktop: "850px",
		},
		colors: {
			"almost-white": "hsl(0, 0%, 98%);",
			"medium-gray": "hsl(0, 0%, 41%);",
			"almost-black": "hsl(0, 0%, 8%);",
		},
		extend: {},
	},
	plugins: [],
};
