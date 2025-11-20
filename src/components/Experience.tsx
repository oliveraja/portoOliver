import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import "../css/Experience.css";

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);

  const experiences = useMemo(
    () => [
      {
        title: "IT Developer at CIMB Niaga",
        date: "July 2025 - Present",
        desc: "Improved an internal web tool by upgrading existing features based on user requests and building data dashboards that followed given designs and user requirements using Vue and TypeScript.",
      },
      {
        title: "Intern Developer at Telkom Indonesia",
        date: "February 2025 - July 2025 • 6 months",
        desc: "Redesigned Telkom AI Showcase using Next.js and TypeScript, built internal web apps using React and Vue for several uses, like showing the video from CCTV, and developed real-time audio transcription using Vue and Docker.",
      },
      {
        title: "Intern IT Developer at CIMB Niaga",
        date: "February 2024 - February 2025 • 1 year",
        desc: "Created an internal Web App using Vue and TypeScript, focusing on responsive UI and reusable components, and built a service that provides Automation and Location Services using Golang and Docker.",
      },
      {
        title: "Freshmen Partner",
        date: "September 2023 - July 2024 • 8 months",
        desc: "Mentoring freshmen during the first year program.",
      },
      {
        title: "Freshmen Leader",
        date: "July 2023 - August 2023 • 1 months",
        desc: "Helps freshmen to adapt to the campus environment.",
      },
      {
        title: "Education Counselor",
        date: "August 2022 - August 2024 • 2 years",
        desc: "Introducing BINUS University to high school students.",
      },
    ],
    []
  );

  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // GSAP marquee + equal height
  useEffect(() => {
    if (isMobile) {
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    if (animationRef.current) {
      animationRef.current.kill();
      animationRef.current = null;
    }
    container.innerHTML = "";

    const doubledExperiences = [...experiences, ...experiences];

    doubledExperiences.forEach((experience) => {
      const experienceBox = document.createElement("div");
      experienceBox.className =
        "experienceBox w-[450px] px-8 pb-8 pt-5 bg-gray-800 rounded-[15px] shadow-lg text-left mr-4";
      experienceBox.innerHTML = `
        <blockquote class="relative w-full bg-gray-800 rounded-md">
          <span class="relative z-20 text-xl font-medium leading-[1.6] text-white">
            ${experience.title}
          </span>
          <div class="relative z-20 mt-5 flex flex-row items-start">
            <span class="flex flex-col gap-1">
              <span class="text-base font-normal leading-[1.6] text-gray-400">
                ${experience.date}
              </span>
              <span class="text-sm font-normal leading-[1.6] text-gray-400">
                ${experience.desc}
              </span>
            </span>
          </div>
        </blockquote>
      `;
      container.appendChild(experienceBox);
    });

    const boxes = Array.from(
      container.querySelectorAll<HTMLDivElement>(".experienceBox")
    );

    if (boxes.length > 0) {
      boxes.forEach((box) => {
        box.style.height = "auto";
      });

      let maxHeight = 0;
      boxes.forEach((box) => {
        const h = box.offsetHeight;
        if (h > maxHeight) maxHeight = h;
      });

      boxes.forEach((box) => {
        box.style.height = `${maxHeight}px`;
      });
    }

    const singleSetWidth = container.scrollWidth / 2;

    if (singleSetWidth === 0) return;

    animationRef.current = gsap.fromTo(
      container,
      { x: 0 },
      {
        x: -singleSetWidth,
        duration: 40,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
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
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {experiences.map((experience, index) => (
        <li key={index} className="ms-4 mb-10 text-left">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {experience.date}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {experience.title}
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {experience.desc}
          </p>
        </li>
      ))}
    </ol>
  );

  return (
    <section
      id="Experience"
      className="Experience px-20 md:px-10 pt-20 bg-custom-light dark:bg-[#171717]"
    >
      <div className="aboutMe items-start justify-start mx-auto pt-10">
        <div className="titleAboutMe flex">
          <h1 className="font-bold text-4xl md:text-[70px] dark:text-white">
            Experience
          </h1>
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
