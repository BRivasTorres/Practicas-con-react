/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"bg-light": "#F0F6FF",
				"text-light": "#394E6A",
				"nav-hov-light": "#EAF0FA",
				"nav-hov-text": "#C7C9D1",
				"main-bg-light": "#FFFFFF",
				"bg-products-light": "#C149AD",
				"active-bg-light": "#021431",
				
				"btns-bg-dark": "#FF7AC6",
				"text-dark": "#F8F8F2",
				"active-bg-dark": "#414558",
				"bg-products-dark": "#FFA94D",
			},
		},
	},
	plugins: [],
};

