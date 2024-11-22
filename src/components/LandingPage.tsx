import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../css/LandingPage.css';
import { useAnimation } from '../animation/AnimationContext';

const LandingPage = () => {
  const { startLandingAnimation } = useAnimation();
  const oliverRef = useRef(null);
  const sebastianRef = useRef(null);
  const marpaungRef = useRef(null);
  const locationRef = useRef(null);

  useEffect(() => {
    if (!startLandingAnimation) return;

    gsap.set([oliverRef.current, sebastianRef.current, marpaungRef.current, locationRef.current], {
      y: -200,
      opacity: 0
    });

    // delay sebelom animasi jalan
    const tl = gsap.timeline({
      delay: 0.8
    });
    
    tl.fromTo( //didelay antar tiap component
      oliverRef.current,
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        sebastianRef.current,
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        "+=0.2"
      )
      .fromTo(
        marpaungRef.current,
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        "+=0.2"
      )
      .fromTo(
        locationRef.current,
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        "+=0.2"
      );
  }, [startLandingAnimation]);

  return (
    <section 
      id='LandingPage' 
      className='LandingPage bg-custom-light dark:bg-[#171717] px-10 h-screen'
      style={{ overflow: 'hidden' }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="name text-center">
          <h1 ref={oliverRef} className="font-semibold text-[300px] dark:text-white">
            OLIVER
          </h1>
          <h1 ref={sebastianRef} className="text-[100px] dark:text-white">
            s e b a s t i a n
          </h1>
          <h1 ref={marpaungRef} className="text-[70px] dark:text-white">
            m a r p a u n g
          </h1>
        </div>
          
        <div ref={locationRef} className="mt-20 box flex items-center justify-between w-[300px] h-[100px] bg-[#262626] rounded-[50px] p-4 text-white">
          <div className="text-white text-lg font-medium text-left pl-5">
            <p>Located in</p>
            <p>Depok,</p>
            <p>Indonesia</p>
          </div>
          <div className="circle w-20 h-20 bg-white rounded-full">
            <img src="/earth.gif" alt="Earth" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;