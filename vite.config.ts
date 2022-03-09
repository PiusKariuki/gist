import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { dependencies } from "./package.json";

// whenever you get the error: (!) Some chunks are larger than 500kb after minification
// find the biggest lib in your vendors chunk and add it to bigLibs
// const bigLibs = [
//   { regExp: /^@material-ui*/, chunkName: "@material-ui" },
//   { regExp: /^@aws-amplify*/, chunkName: "@aws-amplify" },
// ];

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					styledComponents: ["styled-components"],
					bigLibs: [
						"react-phone-number-input",
						"@fortawesome/fontawesome-svg-core",
						"react-data-table-component",
					],
				},
			},
		},
	},
});
