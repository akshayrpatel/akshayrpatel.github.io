import React, { FC } from "react";
import Contacts from "../contact/Contacts";
import { getSectionImage } from "../utils";

const Landing: FC = () => (
	<section className="flex flex-col w-full h-[100dvh] px-4 sm:px-6 md:px-8 items-center justify-center bg-white">
		<div className="flex flex-col w-full max-w-4xl mx-auto items-center gap-16">
			<div className="w-full max-w-2xl h-auto rounded-md overflow-hidden bg-white animate__animated animate__fadeInDown">
				{getSectionImage("/images/projects/coder.png")}
			</div>

			<div className="flex flex-col w-full gap-3 items-center max-w-2xl animate__animated animate__fadeInUp">
				{/* <p className="h-auto lg:pb-2 text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl text-center font-heading font-black bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400 text-transparent bg-clip-text">
					Akshay Patel
				</p> */}
				<p className="h-auto lg:pb-2 text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl text-center font-heading font-black max-md:tracking-tight bg-gradient-to-r from-red-500 via-blue-600 to-purple-500 text-transparent bg-clip-text">
					Akshay Patel
				</p>
				<p className="mt-2 lg:mt-3 2xl:mt-5 text-xl sm:text-2xl md:text-3xl text-center font-subheading font-semibold tracking-wide text-slate-500">
					Software Engineer | AI Enthusiast
				</p>
				<div className="mt-4 lg:mt-6">
					<Contacts />
				</div>
			</div>
		</div>
	</section>
);

export default Landing;
