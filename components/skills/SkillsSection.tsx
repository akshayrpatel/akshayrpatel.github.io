import SectionNav from "./SectionNav";
import { FC } from "react";
import { skillCategories } from "./SkillsData";

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
						academic journey-all in one place.
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
					<div className="overflow-x-auto">
						<div className="grid grid-cols-2 min-w-xs md:grid-cols-4 gap-6 sm:gap-8">
							{skillCategories.map((cat) => (
								<div key={cat.title}>
									<h4 className="mb-2 text-md sm:text-xl text-center font-subheading font-semibold text-slate-700">
										{cat.title}
									</h4>
									<ul className="flex flex-col gap-2 sm:gap-3 items-center">
										{cat.skills.map(({ name, icon: Icon, color }) => (
											<li
												key={name}
												className="flex items-center gap-2 sm:gap-3 min-w-[120px] sm:min-w-[140px]"
											>
												{Icon ? (
													<span
														className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 text-xl sm:text-2xl ${color}`}
													>
														<Icon />
													</span>
												) : (
													<span className="w-7 h-7 sm:w-8 sm:h-8" />
												)}
												<span className="text-sm sm:text-base font-code text-slate-700">
													{name}
												</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
				<SectionNav />
			</div>
		</section>
	);
};

export default SkillsSection;
