import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

const Experience = () => {
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
    const container = containerRef.current;
    const boxWidth = 450; // Width of each box
    const gap = 20; // Gap between boxes
    const totalWidth = (boxWidth + gap) * experiences.length;

    if (container) {
      // Clear the container
      container.innerHTML = "";
      
      // Create double the amount of experiences for seamless scrolling
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

      // Set up GSAP animation for continuous scrolling
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

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [experiences]);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.resume();
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
          {/* Elements will be added dynamically */}
        </div>
      </div>
    </div>
  );
};

export default Experience;