module.exports = {
	content: ["./index.html", "./src/**/*.tsx", "./src/**/*.ts"],
	theme: {
		screens: {
			little: "200px",
			xs: "300px",
			425: "425px",
			tab: "540px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1440px",
			"3xl": "2560px",
		},
		extend: {
			fontFamily: {
				sans: ['"Dosis"', "sans-serif"],
			},
			colors: {
				green: {
					10: "#F4FFDC",
					20: "#E9FF99",
					30: "#B1FF05",
					40: "#00ED64",
					50: "#00AA57",
					60: "#00684A",
					70: "#014E3D",
					80: "#023430",
				},
				blue: {
					20: "#8B5CF6",
					80: "#001E2B",
				},
				black: {
               40: "#4B5563",
					70: "#5d6c74",
					80: "#001E2B",
				},
			},
			backgroundImage: {
				cow: "url('/img/cow2.png')",
				cow3: "url('/img/cow3.png')",
				cart: "url('/img/cart.png')",
			},
		},
	},
	variants: {},
	plugins: [],
};
