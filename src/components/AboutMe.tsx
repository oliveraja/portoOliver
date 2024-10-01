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
    <div>
      <div className="aboutMe items-start justify-start mx-auto px-6">
        <div className="titleAboutMe flex">
          <h1 className="font-bold text-[70px]">About me</h1>
        </div>

        <div className="descAboutMe flex justify-between items-start">
          <h3 className="w-auto text-[25px] text-justify leading-relaxed">
            {`I am a fifth-semester student majoring in Computer Science at Binus University. 
            Currently, I am working part-time as an Education Counselor at BINUS University. 
            I have improved my leadership, teamwork, problem-solving, and time management 
            abilities through this position. I am deeply passionate about developing websites, 
            particularly in the frontend domain. My academic journey has included multiple 
            collaborative group projects, showcasing my ability to work effectively in a team 
            for our final course assignments. I am a dedicated worker, known for my adaptability, 
            strong work ethic, and enthusiasm for embracing new challenges.`
              .split(" ")
              .map((word, index) => (
                <span key={index} className="inline-block pr-1">
                  {word}
                </span>
              ))
            }
          </h3>
          
          <img
            src="/images/me.png"
            alt="About Me"
            className="object-cover pl-20 w-auto max-h-[300px] mt"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
