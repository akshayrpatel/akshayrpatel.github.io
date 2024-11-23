'use client';
import { Landing, Navbar } from '@/components/main';
import {
  AboutSection,
  ExperienceSection,
  SkillSection,
  ContactSection,
  EducationSection,
} from '@/components/sections';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Landing />
      <AboutSection />
      <ExperienceSection />
      {/* <ProjectSection /> */}
      <SkillSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
};

export default Home;
