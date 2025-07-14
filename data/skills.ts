// data/skills.ts
import { BsFiletypeSql } from "react-icons/bs";
import {
	FaJava,
	FaPython,
	FaJs,
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaNodeJs,
	FaGitAlt,
	FaDocker,
	FaDatabase,
	FaAws,
	FaRobot,
	FaTwitter,
} from "react-icons/fa";
import {
	SiTypescript,
	SiCplusplus,
	SiSpring,
	SiNextdotjs,
	SiTailwindcss,
	SiMongodb,
	SiApachekafka,
	SiBulma,
	SiPytorch,
	SiTensorflow,
	SiPandas,
	SiHuggingface,
	SiOllama,
	SiApachetomcat,
	SiEclipseide,
	SiIntellijidea,
} from "react-icons/si";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { RiGeminiFill } from "react-icons/ri";
import { HiCube } from "react-icons/hi";

import { Skill } from "@/types/skill";

const allSkills: Skill[] = [
	// Programming
	{
		name: "Java",
		icon: FaJava,
		color: "text-orange-600",
		category: "Programming",
	},
	{
		name: "Python",
		icon: FaPython,
		color: "text-blue-400",
		category: "Programming",
	},
	{
		name: "JavaScript",
		icon: FaJs,
		color: "text-yellow-400",
		category: "Programming",
	},
	{
		name: "TypeScript",
		icon: SiTypescript,
		color: "text-blue-500",
		category: "Programming",
	},
	{
		name: "C++",
		icon: SiCplusplus,
		color: "text-blue-700",
		category: "Programming",
	},
	{
		name: "SQL",
		icon: BsFiletypeSql,
		color: "text-red-500",
		category: "Programming",
	},

	// Web
	{ name: "Spring", icon: SiSpring, color: "text-green-700", category: "Web" },
	{ name: "Node.js", icon: FaNodeJs, color: "text-green-600", category: "Web" },
	{ name: "HTML5", icon: FaHtml5, color: "text-orange-500", category: "Web" },
	{ name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", category: "Web" },
	{ name: "React", icon: FaReact, color: "text-cyan-400", category: "Web" },
	{
		name: "Next.js",
		icon: SiNextdotjs,
		color: "text-black dark:text-white",
		category: "Web",
	},
	{
		name: "Tailwind",
		icon: SiTailwindcss,
		color: "text-cyan-500",
		category: "Web",
	},
	{ name: "Bulma", icon: SiBulma, color: "text-teal-500", category: "Web" },

	// Technologies / Tools
	{
		name: "MySQL",
		icon: FaDatabase,
		color: "text-blue-700",
		category: "Technologies",
	},
	{
		name: "MongoDB",
		icon: SiMongodb,
		color: "text-green-700",
		category: "Technologies",
	},
	{
		name: "Kafka",
		icon: SiApachekafka,
		color: "text-black",
		category: "Technologies",
	},
	{
		name: "Docker",
		icon: FaDocker,
		color: "text-blue-400",
		category: "Technologies",
	},
	{
		name: "Git",
		icon: FaGitAlt,
		color: "text-orange-400",
		category: "Technologies",
	},
	{
		name: "IntelliJ",
		icon: SiIntellijidea,
		color: "text-blue-900",
		category: "Technologies",
	},
	{
		name: "VS Code",
		icon: VscVscode,
		color: "text-blue-500",
		category: "Technologies",
	},
	{
		name: "Azure",
		icon: VscAzure,
		color: "text-blue-700",
		category: "Technologies",
	},
	{
		name: "G Cloud",
		icon: DiGoogleCloudPlatform,
		color: "text-blue-400",
		category: "Technologies",
	},
	{
		name: "AWS",
		icon: FaAws,
		color: "text-yellow-500",
		category: "Technologies",
	},
	{
		name: "Tomcat",
		icon: SiApachetomcat,
		color: "text-yellow-500",
		category: "Technologies",
	},
	{
		name: "Eclipse",
		icon: SiEclipseide,
		color: "text-purple-800",
		category: "Technologies",
	},
	{
		name: "Firebase",
		icon: IoLogoFirebase,
		color: "text-yellow-400",
		category: "Technologies",
	},
	{
		name: "Twitter",
		icon: FaTwitter,
		color: "text-sky-400",
		category: "Technologies",
	},

	// AI / ML
	{
		name: "Cursor",
		icon: HiCube, // Cube icon from Heroicons
		color: "text-teal-500", // Teal is modern, techy, and fits Cursor's branding
		category: "AI / ML",
	},
	{
		name: "Gemini",
		icon: RiGeminiFill,
		color: "text-blue-500",
		category: "AI / ML",
	},
	{
		name: "PyTorch",
		icon: SiPytorch,
		color: "text-orange-500",
		category: "AI / ML",
	},
	{
		name: "TensorFlow",
		icon: SiTensorflow,
		color: "text-yellow-500",
		category: "AI / ML",
	},
	{ name: "Pandas", icon: SiPandas, color: "text-black", category: "AI / ML" },
	{
		name: "Ollama",
		icon: SiOllama,
		color: "text-green-700",
		category: "AI / ML",
	},
	{
		name: "CrewAI",
		icon: FaRobot,
		color: "text-blue-700",
		category: "AI / ML",
	},
	{
		name: "HuggingFace",
		icon: SiHuggingface,
		color: "text-yellow-400",
		category: "AI / ML",
	},
	{
		name: "Transformers",
		icon: FaRobot,
		color: "text-purple-500",
		category: "AI / ML",
	},
];

// If you still need a categorized structure for display purposes, you can derive it:
type GroupedSkills = { [key: string]: Skill[] };

const skillCategories = allSkills.reduce((acc: GroupedSkills, skill) => {
	if (!acc[skill.category]) {
		acc[skill.category] = [];
	}
	acc[skill.category].push(skill);
	return acc;
}, {});

// Convert to an array of objects if your Skills page expects that format:
const categorizedSkillsArray = Object.keys(skillCategories).map((category) => ({
	title: category,
	skills: skillCategories[category],
}));

const cards = [
	{
		image: "/images/tech/experience.png",
		title: "Experience",
		desc: "Explore my professional journey across diverse teams and roles, building products and solving real-world challenges.",
		href: "/experience",
		bg: "bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300",
		tilt: "-rotate-3",
	},
	{
		image: "/images/tech/projects.png",
		title: "Projects",
		desc: "Dive into real-world applications and creative builds. My projects span AI, web apps, automation, and more.",
		href: "/projects",
		bg: "bg-gradient-to-br from-blue-50 via-sky-100 to-slate-100",
		tilt: "rotate-2",
	},
	{
		image: "/images/tech/education.png",
		title: "Education",
		desc: "My academic foundation and ongoing certifications power my growth and adaptability in tech.",
		href: "/education",
		bg: "bg-gradient-to-br from-[#f3f1fc] via-[#f9f8fe] to-[#eae8fd]",
		tilt: "-rotate-2",
	},
];

// Export allSkills for getSkillIcon, and optionally categorizedSkillsArray
// if your Skills page needs it in that specific format.
export { allSkills, categorizedSkillsArray, cards };
