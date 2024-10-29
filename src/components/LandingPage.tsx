import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../css/LandingPage.css';

const LandingPage = () => {
  const oliverRef = useRef(null);
  const sebastianRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      oliverRef.current,
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' }
    );

    tl.to(sebastianRef.current, { css: { width: '100%' }, duration: 3, ease: 'steps(30)' });
  }, []);

  return (
    <section id='LandingPage' className='LandingPage px-5 h-screen'>
      <div className="items-center justify-center py-20">
        <h1 ref={oliverRef} className="oliver-text font-bold text-[250px] text-white">
          O L I V E R
        </h1>
        <div className="flex items-center justify-center">
          <div className="w-max overflow-hidden">
            <h1
              ref={sebastianRef}
              className="typewriter text-4xl text-white font-bold border-r-4 border-white whitespace-nowrap"
              style={{ width: '0', overflow: 'hidden' }}
            >
              sebastian marpaung
            </h1>
          </div>
        </div>
      </div>
    </section>

  );
};

export default LandingPage;