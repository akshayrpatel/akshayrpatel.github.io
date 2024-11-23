'use client';
import { useState, useEffect } from 'react';
import { sendGTMEvent, sendGAEvent } from '@next/third-parties/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faBriefcase,
  faListCheck,
  faLightbulb,
  faBookOpen,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { SECTIONS } from '../constants';

const NAVBAR_ITEMS = [
  {
    name: SECTIONS.HOME,
    href: '#',
    icon: faHome,
    dir: 'ltr',
    className: 'grow pt-2 hover:bg-white hover:text-black hover:rounded-s-full',
  },
  {
    name: SECTIONS.ABOUT,
    href: '#',
    icon: faUser,
    className: 'grow pt-2 hover:bg-white hover:text-black',
  },
  {
    name: SECTIONS.EXPERIENCE,
    href: '#',
    icon: faBriefcase,
    className: 'grow pt-2 hover:bg-white hover:text-black',
  },
  {
    name: SECTIONS.PROJECTS,
    href: '/projects',
    icon: faListCheck,
    className: 'grow pt-2 hover:bg-white hover:text-black',
  },
  {
    name: SECTIONS.SKILLS,
    href: '#',
    icon: faLightbulb,
    className: 'grow pt-2 hover:bg-white hover:text-black',
  },
  {
    name: SECTIONS.EDUCATION,
    href: '#',
    icon: faBookOpen,
    className: 'grow pt-2 hover:bg-white hover:text-black',
  },
  {
    name: SECTIONS.CONTACT,
    href: '#',
    icon: faPhone,
    dir: 'rtl',
    className: 'grow pt-2 hover:bg-white hover:text-black hover:rounded-s-full',
  },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>(SECTIONS.HOME.toLowerCase());
  const [previousSection, setPreviousSection] = useState<string>();

  const isEndMenuItem = (itemName: string) => {
    return (
      itemName === SECTIONS.HOME.toLowerCase() ||
      itemName === SECTIONS.CONTACT.toLowerCase()
    );
  };

  const handleSectionClick = (e: React.MouseEvent) => {
    const section = e.currentTarget;
    const newSection = section.getAttribute('data-section-name');
    
    if (newSection !== null) {
      sendGTMEvent({ event: 'navButtonClick', value: newSection });
      sendGAEvent('event', 'navButtonClicked', { value: newSection });
      setPreviousSection(activeSection);
      setActiveSection(newSection);

      const element = document.querySelector('#' + newSection?.toLowerCase());
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set the active section based on the section in the viewport
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // When 50% of the section is visible in the viewport
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      // Cleanup observer when component unmounts
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  });

  const NavbarItems = () => {
    return NAVBAR_ITEMS.map((item, i) => {
      const iconText =
        item.dir === 'rtl' ? (
          <span className="inline-block ">
            <span className="max-lg:hidden pl-2 font-googleSansBold font-bold">
              {item.name}
            </span>
            <FontAwesomeIcon icon={item.icon} />
          </span>
        ) : (
          <span className="inline-block ">
            <FontAwesomeIcon icon={item.icon} />
            <span className="max-lg:hidden pl-2 font-googleSansBold font-bold">
              {item.name}
            </span>
            {item.name === SECTIONS.PROJECTS && (
              <span className="flex max-w-max text-[0.5rem] font-extrabold text-red-300 hover:text-red-700 rounded-xs">
                TBD
              </span>
            )}
          </span>
        );

      let itemClass = item.className;
      if (previousSection === item.name.toLowerCase()) {
        itemClass = item.className;
      }
      if (activeSection === item.name.toLowerCase()) {
        itemClass =
          item.className +
          ' text-black bg-white' +
          (isEndMenuItem(item.name.toLowerCase()) ? ' rounded-s-full' : '');
      }

      return (
        <a
          data-section-name={item.name.toLowerCase()}
          dir={item.dir}
          key={i}
          href={item.href}
          role="menuitem"
          className={itemClass}
          onClick={handleSectionClick}
        >
          {iconText}
        </a>
      );
    });
  };

  return (
    <div
      className="flex fixed top-0 mx-auto inset-x-0 lg:mt-2 mt-1 lg:w-[48rem] md:w-[35rem] w-3/4 h-[3rem] min-w-[22rem] items-stretch 
    text-center rounded-full shadow-xl border-2 border-gray-700 text-white bg-gray-700 z-20 animate__animated animate__fadeInDown animate__delay-2s"
    >
      <NavbarItems />
    </div>
  );
};

export default Navbar;
