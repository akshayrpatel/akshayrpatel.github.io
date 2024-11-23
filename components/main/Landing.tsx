import SectionTemplate from '../sections/SectionTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { getSectionImage } from '../elementUtils';

const HomeIcons = () => {
  const icons = [
    {
      icon: faLinkedinIn,
      link: 'https://www.linkedin.com/in/akshayrpatel/',
    },
    {
      icon: faEnvelope,
      link: 'mailto:akshayrpatel@gmail.com',
    },
    {
      icon: faGithub,
      link: 'https://github.com/akshayrpatel/',
    },
  ];
  return icons.map((icon, i) => {
    return (
      <a
        key={i}
        className="flex lg:text-5xl md:text-4xl text-4xl hover:text-slate-400"
        href={icon.link}
      >
        <FontAwesomeIcon icon={icon.icon} />
      </a>
    );
  });
};

const Landing = () => {
  const landingImage = (
    <div className="flex flex-wrap lg:w-full lg:h-full w-full h-[50%] max-lg:mb-36">
      {getSectionImage('/images/sections/coder.png')}
    </div>
  );

  const landingContent = (
    <div className="flex flex-col w-full h-full max-lg:mt-20 justify-center items-center">
      <p
        className="2xl:text-8xl md:text-6xl text-5xl font-googleSansBold font-extrabold lg:p-4 p-3 w-full 
      text-center bg-gradient-to-r from-indigo-700 from-16% via-sky-500 via-50% to-[#0ecee9] to-100% text-transparent bg-clip-text"
      >
        Akshay Patel
      </p>
      <p
        className="2xl:text-4xl md:text-2xl text-lg font-googleSansBold font-medium lg:py-3 px-3 w-full 
      text-center text-slate-400"
      >
        Software Engineer | AI Enthusiast
      </p>
      <div className="flex lg:px-5 px-3 py-4 gap-7 justify-center">
        <HomeIcons />
      </div>
    </div>
  );
  return (
    <SectionTemplate
      title={'Home'}
      leftContent={landingContent}
      rightContent={landingImage}
    />
  );
};

export default Landing;
