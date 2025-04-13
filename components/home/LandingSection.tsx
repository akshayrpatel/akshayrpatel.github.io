import React, { FC } from "react";
import Contacts from "../contact/Contacts";
import { getSectionImage } from "../utils";

const Landing: FC = () => (
	<section className="flex flex-col w-full min-h-screen py-[4rem] md:py-[10rem] lg:py-[12rem] px-4 sm:px-6 md:px-8 items-center bg-white">
		<div className="flex flex-col w-full max-w-4xl mx-auto items-center gap-20 animate__animated animate__fadeIn">
			<div className="w-full max-w-2xl h-auto rounded-md overflow-hidden bg-white">
				{getSectionImage("/images/projects/coder.png")}
			</div>

			<div className="flex flex-col w-full items-center max-w-2xl">
				<p className="h-auto lg:pb-2 text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl text-center font-heading font-black bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400 text-transparent bg-clip-text">
					Akshay Patel
				</p>
				<p className="text-xl lg:pb-2 sm:text-2xl md:text-3xl mt-6 text-center font-subheading font-semibold tracking-wide text-slate-500">
					Software Engineer | AI Enthusiast
				</p>
				<Contacts />
			</div>
		</div>
	</section>
);

export default Landing;
