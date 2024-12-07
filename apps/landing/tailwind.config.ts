import { poluiPlugin } from "pol-ui";
import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"node_modules/pol-ui/lib/**/*.js",
	],
	plugins: [poluiPlugin(), require("@tailwindcss/typography")],
} satisfies Config;
