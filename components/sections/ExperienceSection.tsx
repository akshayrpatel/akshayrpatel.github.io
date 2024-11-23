import SectionTemplate from './SectionTemplate';
import { getSectionImage } from '../elementUtils';
import { SECTIONS } from '../constants';

const ExperienceSection = () => {
  const experienceImage = (
    <div className="flex lg:w-[90%] lg:h-[70%] w-[70%] h-[60%] lg:p-10 p-5">
      {getSectionImage('/images/sections/experience.png')}
    </div>
  );

  const experienceContent = (
    <div className="flex flex-col size-full">
      <div className="flex flex-col gap-5 w-full h-auto lg:px-15 lg:pt-15 md:px-10 md:pt-10 p-5 pb-0 lg:text-right text-center">
        <p className="2xl:text-2xl lg:text-xl md:text-xl text-lg font-regular font-outfitSans">
          {
            "With a diverse background in software engineering, I’ve had the opportunity to work with industry giants like IBM and Sapient, as well as dynamic startups like Naudix, and established companies like Veeva Systems, where I’ve honed my skills in building scalable, high-performance solutions across various industries."
          }
        </p>
        <p className="2xl:text-2xl lg:text-xl md:text-xl text-lg font-regular font-outfitSans">
          {
            'My roles have allowed me to work across various industries, adapt to different environments, and solve complex technical challenges while consistently delivering impactful results.'
          }
        </p>
        <p className="2xl:text-2xl lg:text-xl md:text-xl text-lg font-regular font-outfitSans">
          {
            "I’ve consistently focused on building systems that are both efficient and scalable, tackling everything from complex production issues to code refactoring efforts that reduce technical debt."
          }
        </p>
      </div>
      <div className="flex flex-wrap w-full h-1/2 top-0 lg:px-15 lg:pb-15 md:px-10 md:pb-10 p-5 pt-0 lg:gap-10 gap-5 justify-around items-center">
        <div className="flex lg:size-[6rem] size-[6rem]">
          {getSectionImage('/images/experience/ibm.png')}
        </div>
        <div className="flex lg:size-[10rem] size-[10rem] px-4 py-2">
          {getSectionImage('/images/experience/naudix.png')}
        </div>
        <div className="flex lg:size-[9rem] size-[9rem] px-4 py-2">
          {getSectionImage('/images/experience/sapient.png')}
        </div>
        <div className="flex lg:size-[9rem] size-[9rem] px-4 py-2">
          {getSectionImage('/images/experience/veeva.png')}
        </div>
      </div>
    </div>
  );

  return (
    <SectionTemplate
      title={SECTIONS.EXPERIENCE}
      leftContent={experienceContent}
      rightContent={experienceImage}
    />
  );
};

export default ExperienceSection;
