import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RecentProject = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = titleRef.current;
    if (container) {
      const originalContent = container.innerHTML;
      container.innerHTML += originalContent;

      const titleWidth = container.scrollWidth;

      gsap.set(container, { x: 0 });

      // GSAP untuk running text
      gsap.to(container, {
        x: `-${titleWidth / 2}px`,
        duration: 50,
        ease: "none",
        repeat: -1, 
        modifiers: {
          x: (x) => {
            return `${parseFloat(x) % (titleWidth / 2)}px`;
          },
        },
      });
    }
  }, []);

  return (
    <div className="aboutMe items-start justify-start mx-auto px-6 pt-10">
      <div className="titleAboutMe flex flex-col items-center overflow-hidden">
        <div className="w-full border-t border-gray-300" />
        <div
          ref={titleRef}
          className="relative whitespace-nowrap"
          style={{ display: "inline-block" }}
        >
          <h1 className="font-bold text-[70px] inline-block">
            Recent Project ━ Recent Project ━ Recent Project ━ Recent Project ━ Recent Project ━
          </h1>
        </div>
        <div className="w-full border-b border-gray-300 mt-2" />
      </div>
    </div>
  );
};

export default RecentProject;
