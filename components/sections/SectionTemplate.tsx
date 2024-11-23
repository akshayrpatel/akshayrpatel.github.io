import { JSX } from 'react';

type SectionTemplateProps = {
  title?: string;
  leftContent?: JSX.Element;
  rightContent?: JSX.Element;
  reverseContent?: boolean;
};

const SectionTemplate = ({
  title,
  leftContent,
  rightContent,
  reverseContent,
}: SectionTemplateProps) => {
  reverseContent = reverseContent === undefined ? false : true;
  const isTitleNotHome = title === 'Home' ? false : true;
  const contentSectionStyle = reverseContent
    ? 'flex flex-wrap grow max-lg:flex-col-reverse w-full lg:h-[80%] h-auto justify-around items-center'
    : 'flex flex-wrap grow max-lg:flex-col w-full lg:h-[80%] h-auto justify-around items-center';

  const sectionId = title?.toLowerCase();
  return (
    <section
      id={sectionId}
      className="flex flex-col lg:w-full lg:h-full w-full h-full lg:min-h-[100dvh] min-h-[50rem] min-w-[24rem] max-w-[100rem] mx-auto items-center justify-center bg-white text-gray-700"
    >
      {isTitleNotHome && (
        <div className="flex w-full lg:h-[20%] h-[10%] p-5 justify-center items-center animate__animated animate__fadeInDown animate__delay-1s">
          <p className="2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-[2rem] font-jakartaSans font-extrabold text-[#0EA4E9]">
            {title}
          </p>
        </div>
      )}
      <div className={contentSectionStyle}>
        <div className="flex lg:w-1/2 lg:h-full w-full h-1/2 justify-center items-center animate__animated animate__fadeInLeft animate__delay-1s">
          {leftContent}
        </div>
        <div className="flex lg:w-1/2 lg:h-full w-full h-1/2 justify-center items-center animate__animated animate__fadeInRight animate__delay-1s">
          {rightContent}
        </div>
      </div>
    </section>
  );
};

export default SectionTemplate;
