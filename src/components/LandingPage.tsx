import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../css/LandingPage.css';

const LandingPage = () => {
  const oliverRef = useRef(null);
  const sebastianRef = useRef(null);
  const marpaungRef = useRef(null);
  const locationRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      oliverRef.current,
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        sebastianRef.current,
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )
      .fromTo(
        marpaungRef.current,
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )
      .fromTo(
        locationRef.current,
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
  }, []);

  return (
    <section 
      id='LandingPage' 
      className='LandingPage px-5 h-screen flex flex-col items-center justify-center'
      style={{ overflow: 'hidden' }}
    >
      <div className="name text-center">
        <h1 ref={oliverRef} className="font-semibold text-[300px]">
          OLIVER
        </h1>
        <h1 ref={sebastianRef} className="text-[100px]">
          s e b a s t i a n
        </h1>
        <h1 ref={marpaungRef} className="text-[70px]">
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
    </section>
  );
};

export default LandingPage;
