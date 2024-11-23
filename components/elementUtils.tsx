import { getPrefix } from './utils';

const assetPrefix = getPrefix(process.env.NODE_ENV);

const getSectionImage = (imageSrc: string) => {
  return (
    <img
      className="object-scale-down"
      src={assetPrefix + imageSrc}
      alt="Programming Skill"
    />
  );
};

export { getSectionImage };
