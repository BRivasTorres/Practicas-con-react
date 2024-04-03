/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"nav-bg-light": "#F0F6FF",
				"nav-bg-active": "#021431", 
				"nav-hov-light": "#EAF0FA",
				"main-bg-light": "#FFFFFF",
				"text-light": "#394E6A",
				"bg-products-light": "#C149AD",
				"active-bg-light": "#021431",
				"btns-bg-dard": "#FF7AC6",
				"text-dark": "#F8F8F2",
				"active-bg-dark": "#414558",
				"bg-products-dark": "#FFA94D",
			},
		},
	},
	plugins: [],
};

