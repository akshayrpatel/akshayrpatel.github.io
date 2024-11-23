import SectionTemplate from './SectionTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { getSectionImage } from '../elementUtils';
import { SECTIONS } from '../constants';

const ContactSection = () => {
  const HomeIcons = () => {
    const icons = [
      {
        icon: faLinkedinIn,
        link: 'https://www.linkedin.com/in/akshayrpatel/',
        text: 'linkedin.com/in/akshayrpatel',
      },
      {
        icon: faEnvelope,
        link: 'mailto:akshayrpatel@gmail.com',
        text: 'akshayrpatel24@gmail.com',
      },
    ];
    return icons.map((icon, i) => {
      return (
        <div key={i} className=" justify-around">
          <div className="lg:text-6xl text-5xl">
            <a key={i} href={icon.link} className="hover:text-slate-400">
              <FontAwesomeIcon icon={icon.icon} />
            </a>
          </div>
        </div>
      );
    });
  };
  const contactImage = (
    <div className="flex lg:w-[90%] lg:h-[70%] w-[70%] h-[60%] lg:p-10 p-5">
      {getSectionImage('/images/sections/phone.png')}
    </div>
  );
  const contactContent = (
    <div className="flex flex-col size-full justify-center lg:text-left text-center items-center">
      <p className="flex w-full lg:p-15 md:p-10 p-5 2xl:text-2xl lg:text-xl md:text-xl text-lg font-regular font-outfitSans">
        {
          'I’m eager to explore new challenges and opportunities—please feel free to contact me if you’re interested in discussing potential collaborations!'
        }
      </p>
      <div className="flex flex-wrap w-full top-0 lg:p-15 p-10 lg:gap-10 gap-5 justify-around items-start">
        <HomeIcons />
      </div>
    </div>
  );

  return (
    <SectionTemplate
      title={SECTIONS.CONTACT}
      leftContent={contactImage}
      rightContent={contactContent}
      reverseContent={true}
    />
  );
};

export default ContactSection;
