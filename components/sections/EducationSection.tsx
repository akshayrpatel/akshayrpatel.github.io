import SectionTemplate from './SectionTemplate';
import { getSectionImage } from '../elementUtils';
import { SECTIONS } from '../constants';

const EducationSection = () => {
  const educationImage = (
    <div className="flex lg:w-[90%] lg:h-[70%] w-[70%] h-[60%] lg:p-10 p-5">
      {getSectionImage('/images/sections/education.png')}
    </div>
  );

  const educationContent = (
    <div className="flex flex-wrap lg:size-full size[50%] lg:py-40 lg:px-10 py-10 px-5 items-center">
      <div className="grid grid-cols-7 grid-rows-2 w-full h-[60%]">
        <div className="col-span-1 row-span-2 size-[70%] justify-self-center">
          {getSectionImage('/images/sections/yu.png')}
        </div>
        <div className="col-span-6 row-span-2">
          <p className="relative w-[100%] lg:text-3xl text-2xl pt-1 text-slate-400 font-extrabold font-googleSansBold">
            {'York University'}
            <span className="absolute inline-block top-0 right-0">
              <span className="lg:text-xl md:text-lg text-sm font-light">
                {'2014-2019'}
              </span>
            </span>
          </p>
          <p className="lg:text-2xl md:text-xl text-lg font-medium font-outfit">
            {'Lassonde School of Engineering'}
          </p>
          <p className="md:text-lg text-md font-regular italic font-outfit">
            {'Honors Bachelor in Computer Science'}
          </p>
          <p className="md:text-lg text-md font-regular font-outfit">
            {
              'Courses: Advanced Algorithms, Data Structures, Data Mining, Machine Learning, Big Data Analytics, Software Design, E-Commerce Systems'
            }
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <SectionTemplate
      title={SECTIONS.EDUCATION}
      leftContent={educationContent}
      rightContent={educationImage}
    />
  );
};

export default EducationSection;
