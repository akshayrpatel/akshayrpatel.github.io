import { useState } from 'react';
import '../../public/styles/loader.css';
const AppLoader = () => {
  const [loaderState, setLoaderState] = useState('opacity-100');

  const defaultLoaderClass =
    'fixed flex w-screen h-screen items-center justify-center z-50 bg-slate-600 transition-opacity duration-500';
  let loaderClass = defaultLoaderClass + ' ' + loaderState;

  setTimeout(() => {
    setLoaderState('opacity-0');
    loaderClass = defaultLoaderClass + ' ' + loaderState;
  }, 3000);

  return (
    <section className={loaderClass}>
      <div className="loader"></div>
    </section>
  );
};

export default AppLoader;
