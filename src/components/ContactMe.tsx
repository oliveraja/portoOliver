import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/ContactMe.css';

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  const [displayText, setDisplayText] = useState('');
  const [startTypewriter, setStartTypewriter] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const fullText = "Because you know what happens when you say 'hello' or 'good morning?' You make a connection. And isn't that what being human is all about?";
  const halohaRef = useRef<HTMLHeadingElement>(null);
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const middleSectionRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);
  const typewriterIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resetAnimations = () => {
    setDisplayText('');
    setStartTypewriter(false);
    if (typewriterIntervalRef.current) {
      clearInterval(typewriterIntervalRef.current);
    }
    
    if (leftSectionRef.current && middleSectionRef.current && rightSectionRef.current) {
      gsap.set([leftSectionRef.current, middleSectionRef.current, rightSectionRef.current], {
        opacity: 0,
        y: 50
      });
    }
  };

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: "#ContactMe",
      start: "top center",
      onEnter: () => {
        if (leftSectionRef.current && middleSectionRef.current && rightSectionRef.current) {
          gsap.fromTo(
            [leftSectionRef.current, middleSectionRef.current, rightSectionRef.current],
            { 
              opacity: 0, 
              y: 50
            },
            { 
              opacity: 1, 
              y: 0,
              duration: 1, 
              ease: "power2.out", 
              stagger: 0.2,
              onComplete: () => {
                setTimeout(() => {
                  setStartTypewriter(true);
                }, 300);
              }
            }
          );
        }
      },
      onLeave: resetAnimations,
      onEnterBack: () => {
        resetAnimations();
        if (leftSectionRef.current && middleSectionRef.current && rightSectionRef.current) {
          gsap.fromTo(
            [leftSectionRef.current, middleSectionRef.current, rightSectionRef.current],
            { 
              opacity: 0, 
              y: 50
            },
            { 
              opacity: 1, 
              y: 0,
              duration: 1, 
              ease: "power2.out", 
              stagger: 0.2,
              onComplete: () => {
                setTimeout(() => {
                  setStartTypewriter(true);
                }, 300);
              }
            }
          );
        }
      },
      onLeaveBack: resetAnimations,
    });

    return () => {
      st.kill();
      resetAnimations();
    };
  }, []);

  useEffect(() => {
    if (!startTypewriter) return;

    let index = 0;
    typewriterIntervalRef.current = setInterval(() => {
      if (index >= fullText.length) {
        if (typewriterIntervalRef.current) {
          clearInterval(typewriterIntervalRef.current);
        }
        return;
      }
      setDisplayText(() => fullText.slice(0, index + 1));
      index++;
    }, 50);

    return () => {
      if (typewriterIntervalRef.current) {
        clearInterval(typewriterIntervalRef.current);
      }
    };
  }, [startTypewriter]);

  return (
    <>
      <section 
        id="ContactMe" 
        className="ContactMe bg-custom-light dark:bg-[#171717] bg-cover bg-center bg-no-repeat flex flex-col items-center px-5 md:px-10 pt-20 pb-8"
      >
        <div className="w-full flex flex-col md:flex-row items-center justify-center relative min-h-[400px]">
          <div 
            ref={leftSectionRef}
            className="w-full md:w-[60%] flex flex-col items-center md:items-start justify-center md:pr-5"
          >
            <h1 
              ref={halohaRef} 
              className="text-[60px] md:text-[115px] font-bold text-black dark:text-white text-center md:text-left"
            >
              Haloooha
            </h1>
            <div className="w-full md:w-[550px] mt-4">
              <h3 
                className={`text-[18px] md:text-[25px] text-black dark:text-gray-50 text-center md:text-left italic typewriter ${!startTypewriter ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
              >
                {displayText}
              </h3>
            </div>
          </div>

          <div className="hidden md:block absolute left-[60%] w-[2px] h-[250px] bg-black dark:bg-white"></div>

          <div className="md:hidden w-full mt-8 mb-[30px]">
            <div className="w-full h-[2px] bg-black dark:bg-white my-6"></div>

            {/* untuk mobile */}
            <div className="flex flex-col space-y-4 items-center">
              <a href="/document/Oliver Sebastian Marpaung.pdf" target="_blank" rel="noopener noreferrer">
                <h2 className="italic text-[18px] hover:text-[20px] transition-all duration-300 text-black dark:text-white">curriculum vitae</h2>
              </a>
              <a href="mailto:oliversebastian321@gmail.com" target="_blank" rel="noopener noreferrer">
                <h2 className="italic text-[18px] hover:text-[20px] transition-all duration-300 text-black dark:text-white">email</h2>
              </a>
              <a href="https://www.linkedin.com/in/oliversebastianmarpaung/" target="_blank" rel="noopener noreferrer">
                <h2 className="italic text-[18px] hover:text-[20px] transition-all duration-300 text-black dark:text-white">linkedin</h2>
              </a>
            </div>

            <div className="w-full h-[2px] bg-black dark:bg-white my-6"></div>

            <div className="flex flex-col space-y-4 items-center">
              <a href="https://github.com/oliveraja" target="_blank" rel="noopener noreferrer">
                <h2 className="italic text-[18px] hover:text-[20px] transition-all duration-300 text-black dark:text-white">github</h2>
              </a>
              <a href="https://medium.com/@oliversebastian" target="_blank" rel="noopener noreferrer">
                <h2 className="italic text-[18px] hover:text-[20px] transition-all duration-300 text-black dark:text-white">medium</h2>
              </a>
              <a href="https://www.instagram.com/oliversebastian__" target="_blank" rel="noopener noreferrer">
                <h2 className="italic text-[18px] hover:text-[20px] transition-all duration-300 text-black dark:text-white">instagram</h2>
              </a>
            </div>
          </div>
          {/* untuk mobile */}

          <div 
            ref={middleSectionRef}
            className="hidden md:flex w-[20%] justify-center items-center"
          >
            <div className="medsos flex flex-col space-y-4 justify-center text-black dark:text-white text-center">
              <a href="/document/Oliver Sebastian Marpaung.pdf" target="_blank" rel="noopener noreferrer">
                <h2 className="italic text-[18px] hover:text-[20px] transition-all duration-300 text-black dark:text-white">curriculum vitae</h2>
              </a>
              <a href="mailto:oliversebastian321@gmail.com" target="_blank" rel="noopener noreferrer">
                <h2 className="italic text-[18px] hover:text-[20px] transition-all duration-300 text-black dark:text-white">email</h2>
              </a>
              <a href="https://www.linkedin.com/in/oliversebastianmarpaung/" target="_blank" rel="noopener noreferrer">
                <h2 className="italic text-[18px] hover:text-[20px] transition-all duration-300 text-black dark:text-white">linkedin</h2>
              </a>
            </div>
          </div>

          <div className="hidden md:block absolute right-[20%] w-[2px] h-[250px] bg-black dark:bg-white"></div>

          <div 
            ref={rightSectionRef}
            className="hidden md:flex w-[20%] justify-center items-center"
          >
            <div className="medsos flex flex-col space-y-4 justify-center text-black dark:text-white text-center">
              <a href="https://github.com/oliveraja" target="_blank" rel="noopener noreferrer">
                <h2 className="italic text-[20px] hover:text-[25px] transition-all duration-300">github</h2>
              </a>
              <a href="https://www.instagram.com/oliversebastian__" target="_blank" rel="noopener noreferrer">
                <h2 className="italic text-[18px] hover:text-[20px] transition-all duration-300 text-black dark:text-white">instagram</h2>
              </a>
              <a href="https://medium.com/@oliversebastian" target="_blank" rel="noopener noreferrer">
                <h2 className="italic text-[20px] hover:text-[25px] transition-all duration-300">medium</h2>
              </a>
            </div>
          </div>
          <div className="hidden md:block absolute right-0 w-[2px] h-[250px] bg-black dark:bg-white"></div>
        </div>
      </section>

      {/* button scroll ke atas */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center transition-opacity duration-300 hover:opacity-80 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <i className="fa-solid fa-chevron-up fa-lg text-white dark:text-black"></i>
      </button>
    </>
  );
};

export default ContactMe;