import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useEffect(() => {
    gsap.fromTo(
      ".descAboutMe span", 
      { color: "rgba(255, 255, 255, 0.5)" },
      {
        color: "rgba(255, 255, 255, 1)",
        scrollTrigger: {
          trigger: ".descAboutMe",
          start: "top 80%",
          toggleActions: "play none none reset",
          scrub: 1,
        },
        stagger: 0.1,
        duration: 1,
      }
    );
  }, []);

  return (
  <div className="aboutMe items-start justify-end mx-auto px-6">
    <div className="titleAboutMe flex items-center justify-end">
      <div className="border-t border-gray-300 flex-grow mr-4" />
      <h1 className="font-bold text-[70px] text-right">About me</h1>
    </div>
    <div className="descAboutMe flex justify-end">
      <div className="">
        <h3 className="w-[800px] text-[25px] text-justify leading-relaxed mr-10">
          {`I am a fifth-semester student majoring in Computer Science at Binus University.  Currently, I am working part-time as an Education Counselor at BINUS University. I have improved my leadership, teamwork, problem-solving, and time management abilities through this position. I am deeply passionate about developing websites, particularly in the frontend domain. My academic journey has included multiple collaborative group projects, showcasing my ability to work effectively in a team  for our final course assignments. I am a dedicated worker, known for my adaptability, strong work ethic, and enthusiasm for embracing new challenges.`
            .split(" ")
            .map((word, index) => (
              <span key={index} className="inline-block pr-1">
                {word}
              </span>
            ))
          }
        </h3>
        <h3 className="w-[800px] text-[25px] text-justify leading-relaxed mr-10 mt-5">
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
            <div className="relative w-16 h-16 mx-2 group flex justify-center items-center">
              <img 
                src={tool.src} 
                alt={tool.alt} 
                className="object-contain h-full w-full transition-opacity duration-300 group-hover:opacity-50" 
              />
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tool.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/images/me.png"
        alt="About Me"
        className="w-auto h-96 mr-7"
      />
    </div>
  </div>
  );
};

export default AboutMe;
