import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./data/*.{js,ts}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				sectionTitle: "var(--section-title-font-color)",
			},
			font: {
				title: "var(--font-1-title)",
				subtitle: "var(--font-1-subtitle)",
				paragraph: "var(--font-1-paragraph)",
			},
			fontFamily: {
				google: ["var(--font-google-sans)", "sans-serif"],
				outfit: ["var(--font-outfit-sans)", "sans-serif"],
				jakarta: ["var(--font-jakarta-sans)", "sans-serif"],
				robotoMono: ["var(--font-roboto-mono)"],
				jetbrainsMono: ["var(--font-jetbrains-mono)"],

				heading: ["var(--font-google-sans)", "sans-serif"],
				subheading: [
					"var(--font-outfit-sans)",
					"var(--font-jakarta-sans)",
					"sans-serif",
				],
				code: [
					"var(--font-jetbrains-mono)",
					"var(--font-roboto-mono)",
					"sans-serif",
				],
			},
			display: ["group-hover"],
		},
	},
	plugins: [typography],
} satisfies Config;
