import { BsFiletypeSql } from "react-icons/bs";
import {
	FaJava,
	FaPython,
	FaJs,
	FaNodeJs,
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaDatabase,
	FaDocker,
	FaGitAlt,
	FaTwitter,
	FaArrowLeft,
} from "react-icons/fa";
import { RiGeminiFill, RiNextjsFill } from "react-icons/ri";
import {
	SiTypescript,
	SiCplusplus,
	SiSpring,
	SiTailwindcss,
	SiMongodb,
	SiApachekafka,
	SiIntellijidea,
	SiApachetomcat,
	SiEclipseide,
	SiPytorch,
	SiOllama,
	SiHuggingface,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaRobot } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { useRouter } from "next/navigation";

// This variable should be kept blank is repository is <username>.github.io
const GITHUB_REPO_NAME = "";

const skills = [
	{ name: "Java", icon: FaJava, color: "text-orange-600" },
	{ name: "Python", icon: FaPython, color: "text-blue-400" },
	{ name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
	{ name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
	{ name: "C++", icon: SiCplusplus, color: "text-blue-700" },
	{ name: "SQL", icon: BsFiletypeSql, color: "text-red-500" },

	{ name: "Spring", icon: SiSpring, color: "text-green-700" },
	{ name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
	{ name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
	{ name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
	{ name: "React", icon: FaReact, color: "text-cyan-400" },
	{ name: "Next.js", icon: RiNextjsFill, color: "text-black" },
	{ name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },

	{ name: "MySQL", icon: FaDatabase, color: "text-blue-700" },
	{ name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
	{ name: "Kafka", icon: SiApachekafka, color: "text-black" },
	{ name: "Docker", icon: FaDocker, color: "text-blue-400" },
	{ name: "Git", icon: FaGitAlt, color: "text-orange-400" },
	{ name: "IntelliJ", icon: SiIntellijidea, color: "text-blue-900" },
	{ name: "VS Code", icon: VscVscode, color: "text-blue-500" },

	{ name: "Tomcat", icon: SiApachetomcat, color: "text-yellow-500" },
	{ name: "Eclipse", icon: SiEclipseide, color: "text-purple-800" },
	{ name: "Firebase", icon: IoLogoFirebase, color: "text-yellow-400" },
	{ name: "Twitter", icon: FaTwitter, color: "text-sky-400" },

	{ name: "Gemini", icon: RiGeminiFill, color: "text-pink-300" },
	{ name: "PyTorch", icon: SiPytorch, color: "text-orange-500" },
	{ name: "Ollama", icon: SiOllama, color: "text-green-700" },
	{ name: "HuggingFace", icon: SiHuggingface, color: "text-yellow-400" },
	{ name: "Transformers", icon: FaRobot, color: "text-purple-500" },
];

// This function is only used to prefix asset paths with repository name
const getPrefix = (env: string | undefined) => {
	return env === undefined || env === "development" ? "" : GITHUB_REPO_NAME;
};

const assetPrefix = getPrefix(process.env.NODE_ENV);

const motionFadeInConfig = {
	hidden: { opacity: 0, y: 40 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.1, duration: 0.3, type: "spring" },
	}),
};

// const handleBackClick = () => {
// 	const el = document.getElementById("skillsSection");
// 	console.log("click");
// 	console.log(el);
// 	if (el) {
// 		el.scrollIntoView({ behavior: "smooth", block: "center" });
// 	}
// };

const BackHomeButton: React.FC = () => {
	const router = useRouter();
	return (
		<button
			type="button"
			onClick={() => router.back()}
			className="flex items-center w-fit gap-2 px-4 py-2 left-0 rounded-xl text-base font-subheading font-semibold bg-gray-700 text-gray-200 hover:bg-gray-100 hover:text-gray-700 shadow transition"
		>
			<FaArrowLeft className="text-sm" />
			<span className="max-sm:hidden">Back</span>
		</button>
	);
};

// The function to get the icon component for a skill name
const getSkillIcon = (skillName: string) => {
	const skill = skills.find(
		(s) => s.name.toLowerCase() === skillName.toLowerCase()
	);
	if (!skill) return null;
	const IconComponent = skill.icon;
	return <IconComponent className={`${skill.color}`} title={skill.name} />;
};

const getProjectImage = (imageSrc: string) => {
	return (
		<img
			className="object-scale-down"
			src={assetPrefix + imageSrc}
			alt="Project"
		/>
	);
};

const getSectionImage = (imageSrc: string) => {
	return (
		<img
			className="object-scale-down"
			src={assetPrefix + imageSrc}
			alt="Website Background"
		/>
	);
};

const getSectionCardImage = (imageSrc: string) => {
	return (
		<img
			src={assetPrefix + imageSrc}
			alt="Skills Nav Image"
			className="absolute inset-0 w-full h-full object-contain"
		/>
	);
};

export {
	motionFadeInConfig,
	BackHomeButton,
	getSkillIcon,
	getSectionImage,
	getSectionCardImage,
	getProjectImage,
};
