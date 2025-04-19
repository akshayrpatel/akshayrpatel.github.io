"use client";
import {
	LandingSection,
	AboutSection,
	SkillsSection,
	ContactSection,
	Jarvis,
} from "@/components/sections";

const Home = () => {
	return (
		<main className="overflow-hidden">
			{/* <Navbar /> */}
			<LandingSection />
			<Jarvis />
			<AboutSection />
			<SkillsSection />
			<ContactSection />
		</main>
	);
};

export default Home;
