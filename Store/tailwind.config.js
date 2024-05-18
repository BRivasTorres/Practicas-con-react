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
				"btns-bg-light": "#057AFF",
				"bg-products-light": "#C149AD",

				"bg-dark": "#181920",
				"text-dark": "#F8F8F2",
				"main-dark": "#272935",
				"btns-bg-dark": "#FF7AC6",
				"active-bg-dark": "#414558",
				"products-dark": "#FFA94D",
			},
		},
	},
	plugins: [],
};

