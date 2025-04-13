import { FaBriefcase } from "react-icons/fa6";
import { BackHomeButton } from "../utils";
import { experiences } from "./experienceData";

const ExperiencePage = () => {
	return (
		<section className="flex w-full min-h-screen py-8 items-center bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300">
			<div className="flex flex-col w-full max-w-4xl mx-auto px-3 sm:px-6 md:px-10 py-8 sm:py-12 items-center justify-center animate__animated animate__fadeInUp">
				{/* Back Button */}
				<div className="relative w-full max-w-2xl mb-5 sm:mb-6">
					<div className="absolute left-0 top-1/2 -translate-y-1/2">
						<BackHomeButton />
					</div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-heading font-black text-slate-700">
						Experience
					</h2>
				</div>

				{/* Career summary */}
				<p className="max-w-2xl mx-auto mb-7 sm:mb-10 text-center text-base sm:text-lg md:text-xl font-subheading text-neutral-700">
					Over the years, I’ve had the privilege to work in diverse environments
					and teams, delivering impactful solutions across the stack. My journey
					has shaped me into a versatile engineer who thrives on solving
					real-world challenges and drive innovation.
				</p>
				<div className="flex flex-col gap-7 sm:gap-10 relative">
					{/* Vertical line */}
					<div className="absolute w-0.5 left-5 sm:left-6 top-1 bottom-0 bg-slate-300 z-0" />
					{experiences.map((exp, idx) => (
						<div key={idx} className="flex items-start gap-3 sm:gap-6 relative">
							{/* Left section: Briefcase Icon */}
							<div className="flex flex-col w-10 sm:w-12 pt-1 sm:pt-0 items-center justify-start relative">
								<div className="flex mt-1 p-2.5 sm:p-3 items-center justify-center rounded-full z-10 bg-slate-700 text-white shadow-md">
									<FaBriefcase className="text-md md:text-2xl" />
								</div>
							</div>
							{/* Right section: Card */}
							<div className="flex-1">
								<div className="flex flex-col sm:flex-row mb-1 sm:items-start sm:justify-between">
									<div className="flex items-center gap-2">
										<div>
											<h4 className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-slate-900">
												{exp.position}
											</h4>
											<h3
												className={`pb-1 text-sm sm:text-base md:text-lg uppercase tracking-wide font-code font-bold ${exp.textColor}`}
											>
												{exp.company}
											</h3>
										</div>
									</div>
									<p className="text-sm sm:text-base font-subheading text-slate-500">
										{exp.duration}
									</p>
								</div>
								<ul className="list-disc list-inside pl-1 space-y-1 text-base sm:text-lg md:text-xl font-subheading font-light leading-relaxed text-slate-700">
									{exp.responsibilities.map((item, i) => (
										<li key={i}>{item}</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExperiencePage;
