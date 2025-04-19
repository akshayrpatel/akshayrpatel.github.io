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
} from "react-icons/si";

import {
	SiPytorch,
	SiTensorflow,
	SiPandas,
	SiHuggingface,
	SiOllama,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { FaAws } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa"; // For Transformers, CrewAI, Ollama (as placeholders)

const skillCategories = [
	{
		title: "Programming",
		skills: [
			{ name: "Java", icon: FaJava, color: "text-orange-600" },
			{ name: "Python", icon: FaPython, color: "text-blue-400" },
			{ name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
			{ name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
			{ name: "C++", icon: SiCplusplus, color: "text-blue-700" },
			{ name: "SQL", icon: BsFiletypeSql, color: "text-red-500" },
		],
	},
	{
		title: "Web",
		skills: [
			{ name: "Spring", icon: SiSpring, color: "text-green-700" },
			{ name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
			{ name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
			{ name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
			{ name: "React", icon: FaReact, color: "text-cyan-400" },
			{
				name: "Next.js",
				icon: SiNextdotjs,
				color: "text-black dark:text-white",
			},
			{ name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
			{ name: "Bulma", icon: SiBulma, color: "text-teal-500" },
		],
	},
	{
		title: "Technologies",
		skills: [
			{ name: "MySQL", icon: FaDatabase, color: "text-blue-700" },
			{ name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
			{ name: "Kafka", icon: SiApachekafka, color: "text-black" },
			{ name: "Docker", icon: FaDocker, color: "text-blue-400" },
			{ name: "Git", icon: FaGitAlt, color: "text-orange-400" },
			// { name: "IntelliJ", icon: SiIntellijidea, color: "text-blue-900" },
			// { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
			{ name: "Azure", icon: VscAzure, color: "text-blue-700" },
			{ name: "G Cloud", icon: DiGoogleCloudPlatform, color: "text-blue-400" },
			{ name: "AWS", icon: FaAws, color: "text-yellow-500" },
		],
	},
	{
		title: "AI / ML",
		skills: [
			{ name: "PyTorch", icon: SiPytorch, color: "text-orange-500" },
			{ name: "TensorFlow", icon: SiTensorflow, color: "text-yellow-500" },
			{ name: "Pandas", icon: SiPandas, color: "text-black" },
			{ name: "Ollama", icon: SiOllama, color: "text-green-700" }, // Placeholder
			{ name: "CrewAI", icon: FaRobot, color: "text-blue-700" }, // Placeholder
			{ name: "HuggingFace", icon: SiHuggingface, color: "text-yellow-400" },
			{ name: "Transformers", icon: FaRobot, color: "text-purple-500" }, // Placeholder
		],
	},
];

export { skillCategories };
