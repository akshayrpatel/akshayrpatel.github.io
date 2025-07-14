import Link from "next/link";
import { FC } from "react";
import { getSectionCardImage } from "../utils";
import { cards } from "@/data";

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
