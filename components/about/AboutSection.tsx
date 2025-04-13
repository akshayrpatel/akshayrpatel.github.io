import { Typewriter } from "react-simple-typewriter";
import { FC } from "react";
import {
	typewriterWords,
	techInterests,
	lifeInterests,
} from "./AboutSectionData";

const AboutSection: FC = () => (
	<section className="flex w-full min-h-screen py-32 px-2 sm:px-4 md:px-8 items-center bg-gradient-to-br from-blue-50 via-sky-100 to-slate-100">
		<div className="flex flex-col max-w-3xl mx-auto w-full gap-10 animate__animated animate__fadeIn">
			<div>
				<p className="mb-3 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-heading font-black text-center">
					{"Hi, I'm Akshay"}
				</p>
				<div className="flex justify-center text-center">
					<span className="block text-md sm:text-lg md:text-xl 2xl:text-2xl font-code font-bold text-blue-600">
						<Typewriter
							words={typewriterWords}
							loop
							cursor
							cursorStyle="|"
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1500}
						/>
					</span>
				</div>
				<p className="max-w-2xl mx-auto mt-5 text-center text-base sm:text-xl lg:font-2xl font-subheading text-gray-700">
					With over 5 years of experience in building technology-driven
					solutions, I thrive on solving real-world problems using innovative
					technologies, and my focus is always on creating products that drive
					tangible impact and meaningful change.
				</p>
				<blockquote className="max-w-2xl mx-auto my-8 pl-2 text-center font-subheading italic border-l-4 border-blue-500 text-gray-600">
					“Technology is best when it brings people together.” – Matt Mullenweg
				</blockquote>
			</div>

			{/* Technology Interests */}
			<div className="flex flex-col p-4 sm:p-6 md:p-8 gap-6">
				<h3 className="mb-4 text-center text-xl sm:text-3xl font-heading font-bold">
					Technology Interests
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7 max-w-4xl mx-auto items-start">
					{techInterests.map(({ icon: Icon, label, color, desc }) => (
						<div key={label} className="flex items-center gap-4 sm:gap-5">
							<Icon
								className={`shrink-0 ${color} text-2xl sm:text-3xl md:text-4xl`}
							/>
							<div>
								<h4 className="mb-1 text-md sm:text-xl font-subheading font-semibold">
									{label}
								</h4>
								<p className="text-sm sm:text-sm lg:text-base font-heading text-slate-600">
									{desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Beyond the Screen */}
			<div>
				<h3 className="mb-8 text-center text-xl sm:text-3xl font-heading font-bold">
					Beyond the screen
				</h3>
				<div className="grid grid-cols-2 sm:grid-cols-3 max-w-2xl mx-auto gap-5 md:gap-8">
					{lifeInterests.map(({ icon: Icon, label, color, desc }) => (
						<div
							key={label}
							className="flex flex-col items-center text-center cursor-pointer group"
						>
							<div
								className={`flex w-12 h-12 mb-2 sm:w-14 sm:h-14 rounded-full items-center justify-center ${color}`}
							>
								<Icon className="text-lg sm:text-xl" />
							</div>
							<p className="text-md sm:text-xl font-subheading font-semibold">
								{label}
							</p>
							<p className="text-sm sm:text-sm lg:text-base font-heading text-slate-600">
								{desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	</section>
);

export default AboutSection;
