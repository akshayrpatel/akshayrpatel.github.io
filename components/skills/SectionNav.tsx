import Link from "next/link";
import { FC } from "react";
import { getSectionCardImage } from "../utils";

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

const SectionNav: FC = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto py-12 px-4">
			{cards.map(({ image, title, desc, href, bg, tilt }) => (
				<Link
					href={href}
					key={title}
					className={`group block rounded-2xl shadow-xl overflow-hidden border-2 border-slate-200 hover:border-slate-500 bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${tilt} cursor-pointer`}
				>
					<div className="relative pt-[60%] md:pt-[80%]">
						{getSectionCardImage(image)}
					</div>

					<div
						className={`flex flex-col h-full gap-3 p-6 hover:text-slate-800 ${bg}`}
					>
						<h3 className="font-heading text-xl md:text-2xl font-semibold">
							{title}
						</h3>
						<p className="font-subheading text-sm md:text-base text-gray-700">
							{desc}
						</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default SectionNav;
