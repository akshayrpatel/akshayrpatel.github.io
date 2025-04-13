import localFont from "next/font/local";
import { Outfit, Roboto_Mono, JetBrains_Mono } from "next/font/google";

const googleSans = localFont({
	src: [
		{
			path: "../public/fonts/google_sans/GoogleSans-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/google_sans/GoogleSans-Medium.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../public/fonts/google_sans/GoogleSans-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/google_sans/GoogleSans-Italic.ttf",
			weight: "700",
			style: "italic",
		},
	],
	variable: "--font-google-sans",
});

const outfitSans = Outfit({
	variable: "--font-outfit-sans",
	subsets: ["latin"],
});

const jakartaSans = localFont({
	src: [
		{
			path: "../public/fonts/jakarta_sans/PlusJakartaSans-ExtraLight.ttf",
			weight: "200",
			style: "normal",
		},
		{
			path: "../public/fonts/jakarta_sans/PlusJakartaSans-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../public/fonts/jakarta_sans/PlusJakartaSans-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/jakarta_sans/PlusJakartaSans-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/jakarta_sans/PlusJakartaSans-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../public/fonts/jakarta_sans/PlusJakartaSans-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/jakarta_sans/PlusJakartaSans-ExtraBold.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../public/fonts/jakarta_sans/PlusJakartaSans-Italic.ttf",
			weight: "400",
			style: "italic",
		},
	],
	variable: "--font-jakarta-sans",
});

const robotoMono = Roboto_Mono({
	variable: "--font-roboto-mono",
	subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
});

export { googleSans, outfitSans, jakartaSans, robotoMono, jetbrainsMono };
