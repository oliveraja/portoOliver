import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/AboutMe.css';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const str = "About Me ◆ About Me ◆ About Me ◆ ";
  const [isLightMode, setIsLightMode] = useState(false);
  
  const animationRef = useRef<gsap.core.Timeline | gsap.core.Tween | null>(null);

  useEffect(() => {
    const handleModeChange = () => {
      const currentMode = !document.documentElement.classList.contains('dark');
      setIsLightMode(currentMode);
      
      if (animationRef.current) {
        animationRef.current.kill();
      }

      // Reset ScrollTrigger untuk section ini
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === ".descAboutMe") {
          trigger.kill(true);
        }
      });

      animationRef.current = gsap.fromTo(
        ".descAboutMe .descText",
        { 
          color: currentMode ? "rgba(128, 128, 128, 0.5)" : "rgba(255, 255, 255, 0.1)"
        },
        {
          color: currentMode ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)",
          duration: 0.2,
          stagger: 0.03,
          scrollTrigger: {
            trigger: ".descAboutMe",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reset",
            markers: false,
          }
        }
      );
    };

    handleModeChange();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          handleModeChange();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Cleanup
    return () => {
      observer.disconnect();
      if (animationRef.current) {
        animationRef.current.kill();
      }
      // Kill semua ScrollTrigger saat component unmount
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === ".descAboutMe") {
          trigger.kill(true);
        }
      });
    };
  }, []);

  // animation circle text
  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current;
      textElement.innerHTML = "";

      for (let i = 0; i < str.length; i++) {
        const span = document.createElement("span");
        span.innerHTML = str[i];
        span.style.transform = `rotate(${11 * i}deg)`;
        textElement.appendChild(span);
      }
    }
  }, []);

  // photo animation
    // gsap.fromTo(
    //   ".aboutMeImage",
    //   {
    //     x: 100,
    //     opacity: 0,
    //     scale: 0.8,
    //   },
    //   {
    //     x: 0,
    //     opacity: 1,
    //     scale: 1,
    //     duration: 1.2,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: ".aboutMeImage",
    //       start: "top 80%",
    //       end: "top 30%",
    //       toggleActions: "play none none reset",
    //       markers: false,
    //       scrub: 0.5,
    //     },
    //   }
    // );


  return (
    <section id="AboutMe" className="AboutMe px-10 pt-20 bg-custom-light dark:bg-[#171717]">
      <div className="aboutMe items-start justify-end mx-auto">
        <div className="titleAboutMe flex items-center md:justify-end">
        <div className="border-t border-black dark:border-white flex-grow mr-4" />
          <h1 className="font-bold text-[70px] text-right dark:text-white">About me</h1>
        </div>
        <div className="descAboutMe flex justify-end">
          <div className="">
            <h3 className="w-[800px] text-[25px] text-justify leading-relaxed mr-10">
              {`I am a fifth-semester student majoring in Computer Science at Binus University. Currently, I am working part-time as an Education Counselor at BINUS University. I have improved my leadership, teamwork, problem-solving, and time management abilities through this position. I am deeply passionate about developing websites, particularly in the frontend domain. My academic journey has included multiple collaborative group projects, showcasing my ability to work effectively in a team for our final course assignments. I am a dedicated worker, known for my adaptability, strong work ethic, and enthusiasm for embracing new challenges.`
                .split(" ")
                .map((word, index) => (
                  <span key={index} className="descText inline-block pr-1">
                    {word}
                  </span>
                ))}
            </h3>
            <h3 className="w-[800px] text-[25px] text-justify leading-relaxed mr-10 mt-5 dark:text-white">
              Tools I'm familiar with:
            </h3>
            <div className="flex flex-wrap mt-4">
              {[
                { src: "/images/html.png", alt: "HTML" },
                { src: "/images/css.png", alt: "CSS" },
                { src: "/images/js.png", alt: "JS" },
                { src: "/images/react.png", alt: "React" },
                { src: "/images/vue.png", alt: "Vue.js" },
                { src: "/images/express.png", alt: "Express" },
                { src: "/images/tailwind.png", alt: "Tailwind" },
                { src: "/images/bootstrap.png", alt: "Bootstrap" },
                { src: "/images/laravel.png", alt: "Laravel" },
                { src: "/images/go.png", alt: "Go" },
              ].map((tool) => (
                <div
                  key={tool.alt}
                  className="relative w-16 h-16 mx-2 group flex justify-center items-center"
                >
                  <img
                    src={tool.src}
                    alt={tool.alt}
                    className="object-contain h-full w-full transition-opacity duration-300 group-hover:opacity-50"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-black dark:text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tool.alt}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={isLightMode ? '/images/me-white.png' : '/images/me.png'}
            alt="About Me"
            className="mt-5 aboutMeImage w-auto h-96 mr-7 transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;