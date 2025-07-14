import SectionNav from "./SectionNav";
import { FC } from "react";
import { categorizedSkillsArray as skillCategories } from "@/data";

const SkillsSection: FC = () => {
	return (
		<section
			id="skills"
			className="py-32 px-4 sm:px-4 md:px-8 bg-gradient-to-br bg-white"
		>
			<div className="flex flex-col max-w-5xl mx-auto gap-12">
				{/* Title & Main Description */}
				<div>
					<h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl text-center font-heading font-black text-slate-800">
						My Technical Universe
					</h2>
					<p className="mb-7 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-center font-subheading text-slate-600">
						Explore my toolkit of technical skills, hands-on projects, and
						academic journey - all in one place.
					</p>
				</div>

				{/* Skills Section */}
				<div>
					<h3 className="mb-3 text-xl sm:text-3xl text-center font-heading font-bold text-slate-700">
						Skills
					</h3>
					<p className="max-w-2xl mx-auto mb-6 text-center text-base sm:text-lg lg:text-xl font-subheading text-slate-500">
						From programming languages and frameworks to cloud and design tools,
						here are the technologies I use to turn ideas into reality.
					</p>
					{/* Main container for all skill categories */}
					<div className="flex flex-col gap-6 sm:gap-8">
						{" "}
						{/* Adjusted gap between categories */}
						{skillCategories.map((cat) => (
							<div
								key={cat.title}
								className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pb-6 border-b border-sky-100 last:border-b-0"
							>
								{/* Category Title (Left Column) */}
								<h4 className="w-full sm:w-1/4 text-lg sm:text-xl font-heading font-semibold text-sky-800 text-center sm:text-left shrink-0">
									{cat.title}
								</h4>
								{/* Skills List (Right Column) - now without background boxes */}
								<ul className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 w-full sm:w-3/4">
									{cat.skills.map(({ name, icon: Icon, color }) => (
										<li
											key={name}
											className="flex items-center gap-2 sm:gap-3 px-3 py-1.5 rounded-full text-sm sm:text-base font-code text-slate-700 whitespace-nowrap" // Adjusted for no background box
										>
											{Icon ? (
												<span
													className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 text-xl sm:text-2xl ${color}`} // Smaller icons for less prominence
												>
													<Icon />
												</span>
											) : (
												<span className="w-6 h-6 sm:w-7 sm:h-7" />
											)}
											{name}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<SectionNav />
			</div>
		</section>
	);
};

export default SkillsSection;
