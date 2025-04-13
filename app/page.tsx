"use client";
import {
	LandingSection,
	AboutSection,
	SkillsSection,
	ContactSection,
} from "@/components/sections";

const Home = () => {
	return (
		<main className="overflow-hidden">
			{/* <Navbar /> */}
			<LandingSection />
			<AboutSection />
			<SkillsSection />
			<ContactSection />
		</main>
	);
};

export default Home;
