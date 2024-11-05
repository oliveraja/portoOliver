import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  const experiences = useMemo(
    () => [
      {
        title: "Intern IT Developer at CIMB Niaga",
        date: "February 2024 - Now",
        desc: "Contribute developing in-house applications.",
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
        desc: "Helps freshmen to adapt the campus environment.",
      },
    ],
    []
  );

  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const container = containerRef.current;
      const boxWidth = 450;
      const gap = 20;
      const totalWidth = (boxWidth + gap) * experiences.length;

      if (container) {
        container.innerHTML = "";
        const doubledExperiences = [...experiences, ...experiences];

        doubledExperiences.forEach((experience) => {
          const experienceBox = document.createElement("div");
          experienceBox.className =
            "experienceBox w-[450px] h-[160px] p-8 bg-gray-800 rounded-[15px] shadow-lg flex items-center justify-center text-left mr-4";
          experienceBox.innerHTML = `
            <blockquote class="relative w-[384px] h-[114px] px-2 bg-gray-800 rounded-md">
              <span class="relative z-20 text-xl font-medium leading-[1.6] text-white">${experience.title}</span>
              <div class="relative z-20 mt-5 flex flex-row items-center">
                <span class="flex flex-col gap-1">
                  <span class="text-base font-normal leading-[1.6] text-gray-400">${experience.date}</span>
                  <span class="text-sm font-normal leading-[1.6] text-gray-400">${experience.desc}</span>
                </span>
              </div>
            </blockquote>`;
          container.appendChild(experienceBox);
        });

        animationRef.current = gsap.to(container, {
          x: `-=${totalWidth}`,
          duration: 50,
          ease: "none",
          repeat: Infinity,
          modifiers: {
            x: (x) => `${parseFloat(x) % totalWidth}px`
          },
        });
      }
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [experiences, isMobile]);

  const handleMouseEnter = () => {
    if (animationRef.current && !isMobile) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current && !isMobile) {
      animationRef.current.resume();
    }
  };

  const MobileTimeline = () => (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-left">
      {experiences.map((experience, index) => (
        <li key={index}>
          <hr className="bg-white" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="date font-mono italic">{experience.date}</time>
            <div className="title text-lg font-black">{experience.title}</div>
            <p className="desc text-justify">{experience.desc}</p>
          </div>
          <hr className="bg-white" />
        </li>
      ))}
    </ul>
  );

  return (
    <section id="Experience" className="Experience px-4 md:px-10 pt-10">
      <div className="aboutMe items-start justify-start mx-auto pt-10">
        <div className="titleAboutMe flex">
          <h1 className="font-bold text-4xl md:text-[70px]">Experience</h1>
        </div>

        {isMobile ? (
          <div className="mt-8">
            <MobileTimeline />
          </div>
        ) : (
          <div className="overflow-hidden mt-8">
            <div
              className="flex"
              ref={containerRef}
              style={{ width: "max-content" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;