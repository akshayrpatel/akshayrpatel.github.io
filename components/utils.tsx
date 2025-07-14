import { allSkills } from "@/data/skills";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

// This variable should be kept blank is repository is <username>.github.io
const GITHUB_REPO_NAME = "";
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
	const skill = allSkills.find(
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

const getJarvisWelcomeImage = (imageSrc: string) => {
	return (
		<img
			className="lg:size-36 md:size-24 size-20 p-1 transition-transform duration-300 hover:scale-110"
			src={assetPrefix + imageSrc}
			alt="Akshay's Memoji"
		/>
	);
};

const getJarvisImage = (imageSrc: string | null) => {
	return (
		<img
			className="size-20 p-1 rounded-full"
			src={assetPrefix + imageSrc}
			alt="Akshay's Memoji"
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
	getJarvisImage,
	getJarvisWelcomeImage,
};
