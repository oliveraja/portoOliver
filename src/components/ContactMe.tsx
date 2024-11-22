import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/ContactMe.css';

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Because you know what happens when you say 'hello' or 'good morning?' You make a connection. And isn't that what being human is all about?";
  const halohaRef = useRef<HTMLHeadingElement>(null);
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const middleSectionRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-triggered animations
    ScrollTrigger.create({
      trigger: "#ContactMe",
      start: "top center",
      onEnter: () => {
        if (leftSectionRef.current && middleSectionRef.current && rightSectionRef.current) {
          gsap.fromTo(
            [leftSectionRef.current, middleSectionRef.current, rightSectionRef.current],
            { opacity: 0, x: 50 },
            { 
              opacity: 1, 
              x: 0, 
              duration: 1, 
              ease: "power2.out", 
              stagger: 0.2 
            }
          );
        }
      },
    });

    // Typewriter effect
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + fullText[index]);
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 50); // Adjust typing speed here (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="ContactMe" 
      className="ContactMe bg-custom-light dark:bg-[#171717] bg-cover bg-center bg-no-repeat flex flex-col items-center px-10 md:px-10 pt-20"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-center mb-10 relative">
        <div 
          ref={leftSectionRef}
          className="w-full md:w-[60%] flex flex-col items-center md:items-start justify-center pr-5"
        >
          <h1 
            ref={halohaRef} 
            className="text-[60px] md:text-[115px] font-bold text-black dark:text-white text-center md:text-left"
          >
            Haloooha
          </h1>
          <h3 
            className="w-[550px] mt-4 text-[18px] md:text-[25px] text-black dark:text-gray-50 text-center md:text-left italic typewriter"
          >
            {displayText}
          </h3>
        </div>
        
        <div className="hidden md:block absolute left-[60%] w-[2px] h-[250px] bg-black dark:bg-white"></div>

        <div 
          ref={middleSectionRef}
          className="w-full md:w-[20%] flex justify-center items-center"
        >
          <div className="medsos flex flex-col space-y-4 justify-center text-black dark:text-white text-center">
            <a href="mailto:oliversebastian321@gmail.com" target="_blank" rel="noopener noreferrer">
              <h2 className="italic text-[16px] md:text-[20px] hover:text-[20px] md:hover:text-[25px] transition-all duration-300">email</h2>
            </a>
            <a href="https://www.linkedin.com/in/oliversebastianmarpaung/" target="_blank" rel="noopener noreferrer">
              <h2 className="italic text-[16px] md:text-[20px] hover:text-[20px] md:hover:text-[25px] transition-all duration-300">linkedin</h2>
            </a>
            <a href="https://www.instagram.com/oliversebastian__/" target="_blank" rel="noopener noreferrer">
              <h2 className="italic text-[16px] md:text-[20px] hover:text-[20px] md:hover:text-[25px] transition-all duration-300">instagram</h2>
            </a>
          </div>
        </div>

        <div className="hidden md:block absolute right-[20%] w-[2px] h-[250px] bg-black dark:bg-white"></div>

        <div 
          ref={rightSectionRef}
          className="w-full md:w-[20%] flex justify-center items-center"
        >
          <div className="medsos flex flex-col space-y-4 justify-center text-black dark:text-white text-center">
            <a href="https://github.com/oliveraja" target="_blank" rel="noopener noreferrer">
              <h2 className="italic text-[16px] md:text-[20px] hover:text-[20px] md:hover:text-[25px] transition-all duration-300">github</h2>
            </a>
            <a href="https://medium.com/@oliversebastian" target="_blank" rel="noopener noreferrer">
              <h2 className="italic text-[16px] md:text-[20px] hover:text-[20px] md:hover:text-[25px] transition-all duration-300">medium</h2>
            </a>
            <a href="https://www.youtube.com/@oliversebastian" target="_blank" rel="noopener noreferrer">
              <h2 className="italic text-[16px] md:text-[20px] hover:text-[20px] md:hover:text-[25px] transition-all duration-300">youtube</h2>
            </a>
          </div>
          <div className="hidden md:block absolute right-0 w-[2px] h-[250px] bg-black dark:bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
