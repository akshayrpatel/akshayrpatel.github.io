import SectionTemplate from './SectionTemplate';
import { getSectionImage } from '../elementUtils';
import { SECTIONS } from '../constants';

const SkillSection = () => {
  const skillImage = (
    <div className="flex lg:w-[90%] lg:h-[70%] w-[70%] h-[60%] lg:p-10 p-5">
      {getSectionImage('/images/sections/skills-2.png')}
    </div>
  );

  const AllSkills = () => {
    const allSkills = [
      {
        name: 'Java',
        file: 'java-96.png',
      },
      {
        name: 'Python',
        file: 'python-96.png',
      },
      {
        name: 'JavaScript',
        file: 'javascript-96.png',
      },
      {
        name: 'React',
        file: 'react-96.png',
      },
      {
        name: 'TypeScript',
        file: 'typescript-96.png',
      },
      {
        name: 'SQL',
        file: 'sql-96.png',
      },
      {
        name: 'HTML5',
        file: 'html5-96.png',
      },
      {
        name: 'CSS3',
        file: 'css3-96.png',
      },
      {
        name: 'Spring Boot',
        file: 'springboot-96.png',
      },
      {
        name: 'Flask',
        file: 'flask-96.png',
      },
      {
        name: 'NodeJS',
        file: 'nodejs-96.png',
      },
      {
        name: 'Git',
        file: 'git-96.png',
      },
    ];

    return allSkills.map((skill, i) => {
      const srcPath = '/images/skills/' + skill.file;
      return (
        <div key={i} className="relative grow size-full lg:place-items-left group">
          { getSectionImage(srcPath) }
          <div className="invisible group-hover:visible absolute max-w-max p-2 top-0 left-0 z-30 rounded-lg shadow-xl bg-slate-300 text-slate-500">
            <p className="text-lg">{skill.name}</p>
          </div>
        </div>
      );
    });
  };

  const skillContent = (
    <div className="flex flex-wrap gap-5 lg:size-full lg:py-20 lg:px-10 py-10 px-5 items-center">
      <div className="flex lg:text-left text-center">
        <p className="2xl:text-2xl lg:text-xl md:text-xl text-lg font-regular font-outfitSans">
          {'My technical skills encompass a diverse range of programming languages and frameworks, including Java, Python, and JavaScript, and ' +
            'I have hands-on experience with frameworks like Spring, Flask for backend development and React with TypeScript, Vue for creating dynamic front-end applications.'}
        </p>
      </div>
      <div className="relative grid lg:grid-cols-3 lg:grid-rows-4 md:grid-cols-6 md:grid-rows-2 grid-cols-4 grid-rows-3 w-full h-auto gap-5">
        <AllSkills />
      </div>
    </div>
  );

  return (
    <SectionTemplate
      title={SECTIONS.SKILLS}
      leftContent={skillImage}
      rightContent={skillContent}
      reverseContent={true}
    />
  );
};

export default SkillSection;
