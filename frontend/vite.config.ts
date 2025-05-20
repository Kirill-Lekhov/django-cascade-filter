import path from "path"

import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"

// https://vite.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: {
				"cascade-filter": path.resolve(__dirname, "src/main.ts"),
			},
			name: "cascade-filter",
			fileName: (format) => `cascade-filter.${format}.js`
		},
		rollupOptions: {
			output: {
				assetFileNames: (assertInfo) => {
					if (assertInfo.names[0] === "django-cascade-filters.css") {
						return "cascade-filter.css"
					}

					return "[name][extname]"
				},
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	plugins: [svelte()],
})
