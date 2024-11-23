import SectionTemplate from './SectionTemplate';
import { getSectionImage } from '../elementUtils';
import { SECTIONS } from '../constants';

const AboutSection = () => {

  const aboutImage = (
    <div className="flex lg:w-full lg:h-full w-[90%] h-[70%]">
      {getSectionImage('/images/sections/about.png')}
    </div>
  );

  const aboutContent = (
    <div className="flex flex-col size-full lg:p-15 md:p-10 p-5 gap-5 lg:text-left text-center items-center justify-center">
      <p className="2xl:text-2xl lg:text-xl text-lg font-normal font-outfitSans">
        {
          "I'm Akshay, a software engineer with a drive to build innovative software solutions that make a meaningful impact. With over 5 years of industry experience, I've developed a strong foundation in building software and a passion for solving complex problems."
        }
      </p>
      <p className="2xl:text-2xl lg:text-xl text-lg font-normal font-outfitSans">
        {
          "I believe that AI has the potential to change the world, and I'm excited to apply my knowledge to create innovative solutions that add value and positively impact people's lives. Whether it's optimizing business processes, automating workflows, or developing intelligent applications, I am dedicated to continuously learning and evolving in this ever-growing field."
        }
      </p>
      <p className="2xl:text-2xl lg:text-xl text-lg font-normal font-outfitSans">
        {
          'While my professional life revolves around technology, my personal interests take me on exciting adventures beyond the screen. Traveling is one of my greatest joys, each journey fuels my creativity and inspires me to approach challenges with a fresh perspective'
        }
      </p>
      <p className="2xl:text-2xl lg:text-xl text-lg font-normal font-outfitSans">
        {
          "I enjoy playing outdoor sports, there's nothing like the thrill of a friendly competition in sports like cricket, badminton, and tennis. I also love going on long walks and connecting with friends and family whenever possible."
        }
      </p>
    </div>
  );
  return (
    <SectionTemplate
      title={SECTIONS.ABOUT}
      leftContent={aboutImage}
      rightContent={aboutContent}
      reverseContent={true}
    />
  );
};

export default AboutSection;
