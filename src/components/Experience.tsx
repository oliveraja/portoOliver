import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

const Experience = () => {
  const experiences = useMemo(
    () => [
      {
        title: "Intern IT Developer at CIMB Niaga",
        date: "February 2024 - Now",
        desc: "Contribute to the process of developing in-house applications for internal use.",
      },
      {
        title: "Education Counselor",
        date: "August 2022 - August 2024 • 2 years",
        desc: "Introducing BINUS University to high school students.",
      },
      {
        title: "Freshmen Partner",
        date: "September 2023 - July 2024 • 8 months",
        desc: "Mentoring freshmen during the first year program.",
      },
      {
        title: "Freshmen Leader",
        date: "July 2023 - August 2023 • 1 months",
        desc: "Helps freshmen to adapt to the lecture environment and also helps to introduce the campus environment.",
      },
    ],
    []
  );

  const containerRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const boxWidth = 450;
    const gap = 20;
    const totalWidth = (boxWidth + gap) * experiences.length;

    if (container) {
      // GSAP animation running text from left to right continuously
      tweenRef.current = gsap.to(container, {
        x: `-${totalWidth}px`, // Move to the left by totalWidth
        duration: 50,
        ease: "none",
        repeat: -1, // Infinite loop
        modifiers: {
          x: gsap.utils.unitize((value) => parseFloat(value) % totalWidth), // Ensure looping
        },
      });
    }

    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, [experiences]);

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      tweenRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      tweenRef.current.resume();
    }
  };

  return (
    <div className="aboutMe items-start justify-start mx-auto px-6 pt-10">
      <div className="titleAboutMe flex">
        <h1 className="font-bold text-[70px]">Experience</h1>
      </div>

      <div className="overflow-hidden mt-8">
        <div
          className="flex"
          ref={containerRef}
          style={{ width: "max-content" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {experiences.concat(experiences).map((experience, index) => (
            <div
              key={index}
              className="experienceBox w-[450px] h-[160px] p-8 bg-gray-800 rounded-[15px] shadow-lg flex items-center justify-center text-left mr-4"
            >
              <blockquote className="relative w-[384px] h-[114px] px-2 bg-gray-800 rounded-md">
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                  style={{ zIndex: -1 }}
                ></div>

                <span className="relative z-20 text-xl font-medium leading-[1.6] text-white">
                  {experience.title}
                </span>

                <div className="relative z-20 mt-5 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-base font-normal leading-[1.6] text-gray-400">
                      {experience.date}
                    </span>
                    <span className="text-sm font-normal leading-[1.6] text-gray-400">
                      {experience.desc}
                    </span>
                  </span>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
