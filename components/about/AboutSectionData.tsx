import {
	FaCode,
	FaLightbulb,
	FaPuzzlePiece,
	FaGithub,
	FaCogs,
	FaPalette,
	FaPlane,
	FaWalking,
	FaCamera,
	FaMusic,
} from "react-icons/fa";
import { GiCookingPot, GiGearStickPattern } from "react-icons/gi";
import { MdSportsCricket } from "react-icons/md";
import { SiOpenai } from "react-icons/si";
import { FC } from "react";

// Type definitions
type TechInterest = {
	icon: FC<{ className?: string }>;
	label: string;
	color: string;
	desc: string;
};

type LifeInterest = {
	icon: FC<{ className?: string }>;
	label: string;
	color: string;
	desc: string;
};

export const techInterests: TechInterest[] = [
	{
		icon: FaCode,
		label: "Software Engineering",
		color: "text-indigo-600",
		desc: "Building robust, scalable web and backend solutions.",
	},
	{
		icon: SiOpenai,
		label: "AI & Machine Learning",
		color: "text-emerald-600",
		desc: "Creating intelligent systems that evolve and adapt through the power of modern AI.",
	},
	{
		icon: GiGearStickPattern,
		label: "Distributed Systems",
		color: "text-sky-600",
		desc: "Designing cloud-native, distributed architectures for speed and reliability.",
	},
	{
		icon: FaGithub,
		label: "Open Source",
		color: "text-gray-800",
		desc: "Technology should be shared and improved upon collaboratively.",
	},
	{
		icon: FaCogs,
		label: "DevOps & Automation",
		color: "text-orange-600",
		desc: "Automating workflows, CI/CD, and infrastructure as code.",
	},
	{
		icon: FaPalette,
		label: "UI/UX & Design Systems",
		color: "text-pink-600",
		desc: "Crafting intuitive user interfaces and seamless digital experiences.",
	},
	{
		icon: FaLightbulb,
		label: "Problem Solving",
		color: "text-yellow-500",
		desc: "Turning complex challenges into elegant, innovative solutions.",
	},
	{
		icon: FaPuzzlePiece,
		label: "Systems Thinking",
		color: "text-purple-600",
		desc: "Connecting the dots across domains to see the bigger picture.",
	},
];

export const lifeInterests: LifeInterest[] = [
	{
		icon: FaPlane,
		label: "Traveling",
		color: "bg-indigo-100 text-indigo-500",
		desc: "Exploring new places and cultures.",
	},
	{
		icon: MdSportsCricket,
		label: "Sports",
		color: "bg-red-100 text-red-500",
		desc: "Staying active and competitive.",
	},
	{
		icon: FaWalking,
		label: "Long Walks",
		color: "bg-green-100 text-green-600",
		desc: "Finding clarity and inspiration outdoors.",
	},
	{
		icon: FaCamera,
		label: "Photography",
		color: "bg-cyan-100 text-cyan-500",
		desc: "Capturing moments and stories.",
	},
	{
		icon: FaMusic,
		label: "Music",
		color: "bg-purple-100 text-purple-500",
		desc: "Relaxing and recharging with favorite tunes.",
	},
	{
		icon: GiCookingPot,
		label: "Cooking",
		color: "bg-orange-100 text-orange-500",
		desc: "Learning to cook some of my favourite meals.",
	},
];

export const typewriterWords: string[] = [
	"Software Engineer.",
	"AI Enthusiast.",
	"Continuous Learner.",
	"Building the future, one line at a time.",
];
