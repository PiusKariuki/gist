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
				sans: ['"Zen Kurenaido"', "sans-serif"],
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
					80: "#001E2B",
				},
				black: {
					70: "#5d6c74",
					80: "#001E2B",
				},
			},
			backgroundImage: {
				mongo: "url('/img/mongo.jpg')",
				menu: "url('/img/menu.png')",
				search: "url('/img/search.png')",
			},
		},
	},
	variants: {},
	plugins: [],
};
