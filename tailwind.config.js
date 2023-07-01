/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: "#2D70FD",
				line: "#F6F9FB",
				"line-dark": "#F1F4F4",
			},
			fontFamily: {
				sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
