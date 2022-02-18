module.exports = {
	content: [
		"./index.html",
		"./src/**/*.tsx",
		"./src/**/*.ts",
	],
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
				gray: {
					10: "#6B7280",
				},

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
					// 20: "#8B5CF6",
					20: "#33546D",
					80: "#001E2B",
				},
				black: {
					// 1: "#000000",
					40: "#4B5563",
					70: "#5d6c74",
					80: "#001E2B",
				},
				red: {
					20: "#F74356",
				},
				brown: {
					20: "#F5F5F5",
				},
			},
			backgroundImage: {
				mannequinn: "url('/img/mannequin.svg')",
				expectrum: "url('/img/expectrum.png')",
				cart: "url('/img/cart.png')",
				hero: "url('/img/61f007d772a3a12ec4b7544a.png')",
			},
		},
	},
	variants: {},
	plugins: [],
};
