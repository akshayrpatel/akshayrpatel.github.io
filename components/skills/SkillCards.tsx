import Link from "next/link";
import { FC, JSX } from "react";
import { FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa";

type SkillCardInfo = {
	name: string;
	desc: string;
	link: string;
	href: string;
	icon: JSX.Element;
	iconColor: string;
	iconBg: string;
	textColor: string;
	buttonBg: string;
	buttonHover: string;
};

const skillCardsInfo: SkillCardInfo[] = [
	{
		name: "Experience",
		desc: "Explore my professional journey across diverse teams and roles, building products and solving real-world challenges.",
		link: "Work History",
		href: "/experience",
		icon: <FaBriefcase className="text-red-600 text-3xl" />,
		iconColor: "text-red-600",
		iconBg: "bg-red-100",
		textColor: "text-red-600",
		buttonBg: "bg-red-600",
		buttonHover: "hover:bg-red-900",
	},
	{
		name: "Projects",
		desc: "Dive into real-world applications and creative builds. My projects span AI, web apps, automation, and more.",
		link: "See My Work",
		href: "/projects",
		icon: <FaCode className="text-sky-600 text-3xl" />,
		iconColor: "text-sky-600",
		iconBg: "bg-sky-100",
		textColor: "text-sky-600",
		buttonBg: "bg-sky-600",
		buttonHover: "hover:bg-sky-700",
	},
	{
		name: "Education",
		desc: "My academic foundation and ongoing certifications power my growth and adaptability in tech.",
		link: "My Credentials",
		href: "/education",
		icon: <FaGraduationCap className="text-green-600 text-3xl" />,
		iconColor: "text-green-600",
		iconBg: "bg-green-100",
		textColor: "text-green-600",
		buttonBg: "bg-green-600",
		buttonHover: "hover:bg-green-700",
	},
];

type SkillCardProps = SkillCardInfo;

const SkillCard: FC<SkillCardProps> = ({
	name,
	desc,
	link,
	href,
	icon,
	iconBg,
	textColor,
	buttonBg,
	buttonHover,
}) => (
	<div className="flex flex-col items-center gap-6 px-5 py-8 rounded-lg w-full max-w-md bg-white">
		<div
			className={`flex mb-4 p-4 rounded-full items-center justify-center ${iconBg}`}
			aria-hidden="true"
		>
			{icon}
		</div>
		<h3
			className={`text-xl md:text-2xl text-center font-heading font-semibold ${textColor}`}
		>
			{name}
		</h3>
		<p className="text-sm sm:text-base text-center leading-relaxed font-subheading text-slate-500">
			{desc}
		</p>
		<Link
			href={href}
			className={`inline-block mt-auto px-6 py-2 rounded-full font-heading font-semibold text-center text-white transition-colors duration-150 ${buttonBg} ${buttonHover}`}
		>
			{link}
		</Link>
	</div>
);

const SkillCards: FC = () => (
	<div className="flex flex-col md:flex-row gap-10 w-full justify-center my-12 mx-auto max-w-6xl px-4">
		{skillCardsInfo.map((info) => (
			<SkillCard key={info.name} {...info} />
		))}
	</div>
);

export default SkillCards;
