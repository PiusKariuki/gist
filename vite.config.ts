import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";


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
