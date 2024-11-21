import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/ContactMe.css';

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  const halohaRef = useRef<HTMLHeadingElement>(null);
  const greetingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const [, setShowRightSection] = useState(false);

  useEffect(() => {
    const typewriter = (
      element: HTMLElement | null,
      text: string,
      speed: number,
      onComplete?: () => void
    ) => {
      if (!element) return;
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          element.innerHTML += text[index];
          index++;
        } else {
          clearInterval(interval);
          if (onComplete) onComplete();
        }
      }, speed);
    };

    ScrollTrigger.create({
      trigger: "#ContactMe",
      start: "top center",
      onEnter: () => {
        const halohaElement = halohaRef.current;
        const greetingElement = greetingRef.current;

        if (halohaElement) halohaElement.innerHTML = '';
        if (greetingElement) greetingElement.innerHTML = '';

        if (lineRef.current && contactsRef.current) {
          gsap.set([lineRef.current, contactsRef.current], { 
            opacity: 0,
            x: 50 
          });
        }

        typewriter(halohaElement, "Haloooha", 100, () => {
          typewriter(
            greetingElement,
            "Because you know what happens when you say 'hello' or 'good morning?' You make a connection. And isn't that what being human is all about?",
            50,
            () => {
              setShowRightSection(true);
              if (lineRef.current && contactsRef.current) {
                gsap.to([lineRef.current, contactsRef.current], {
                  opacity: 1,
                  x: 0,
                  duration: 1,
                  ease: "power2.out",
                  stagger: 0.2
                });
              }
            }
          );
        });
      },
    });
  }, []);

  return (
    <section 
      id="ContactMe" 
      className="ContactMe bg-[url('/images/bgDark2.svg')] dark:bg-[url('/images/bgWhite2.svg')] bg-cover bg-center bg-no-repeat flex items-center min-h-screen"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-10">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center p-4 md:p-10 md:ml-20">
          <h1 
            ref={halohaRef} 
            className="text-[60px] md:text-[115px] font-bold text-white dark:text-black text-center md:text-left"
          ></h1>
          <h3 
            ref={greetingRef} 
            className="mt-4 text-[18px] md:text-[25px] text-white dark:text-gray-600 text-center md:text-left italic"
          ></h3>
        </div>

        <div className="flex justify-center items-center my-8 md:ml-10">
          <div 
            ref={lineRef}
            className="w-[200px] h-[2px] md:w-[2px] md:h-[200px] bg-white dark:bg-black"
          ></div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center md:mr-96">
          <div 
            ref={contactsRef}
            className="medsos flex flex-col space-y-4 justify-center text-white dark:text-black text-center md:text-left"
          >
            <a href="mailto:oliversebastian321@gmail.com" target="_blank" rel="noopener noreferrer">
              <h2 className="italic text-[16px] md:text-[20px] hover:text-[20px] md:hover:text-[25px] transition-all duration-300">email</h2>
            </a>
            <a href="https://www.linkedin.com/in/oliversebastianmarpaung/" target="_blank" rel="noopener noreferrer">
              <h2 className="italic text-[16px] md:text-[20px] hover:text-[20px] md:hover:text-[25px] transition-all duration-300">linkedin</h2>
            </a>
            <a href="https://github.com/oliveraja" target="_blank" rel="noopener noreferrer">
              <h2 className="italic text-[16px] md:text-[20px] hover:text-[20px] md:hover:text-[25px] transition-all duration-300">github</h2>
            </a>
            <a href="https://www.instagram.com/oliversebastian__/" target="_blank" rel="noopener noreferrer">
              <h2 className="italic text-[16px] md:text-[20px] hover:text-[20px] md:hover:text-[25px] transition-all duration-300">instagram</h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;