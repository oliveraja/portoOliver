import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/RecentProject.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const RecentProject = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const projectRefs = useRef<HTMLDivElement[]>([]);
  projectRefs.current = [];

  // Fix TypeScript error by adding proper type
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  useEffect(() => {
    const container = titleRef.current;
    if (container) {
      const originalContent = container.innerHTML;
      container.innerHTML += originalContent;

      const titleWidth = container.scrollWidth;

      gsap.set(container, { x: 0 });

      // Running text animation with ScrollTrigger
      gsap.to(container, {
        x: `-=${titleWidth}`,
        duration: 200,
        ease: "none",
        repeat: Infinity,
        modifiers: {
          x: (x) => {
            return `${parseFloat(x) % titleWidth}px`;
          },
        },
      });
    }

    // Project items animation with ScrollTrigger
    projectRefs.current.forEach((project, i) => {
      gsap.fromTo(
        project,
        { 
          y: 100, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
            toggleActions: "play none none none"
          },
          delay: i * 0.3 // Stagger effect
        }
      );
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const [hoveredProject1, setHoveredProject1] = useState(false);
  const [hoveredProject2, setHoveredProject2] = useState(false);
  const [hoveredProject3, setHoveredProject3] = useState(false);

  return (
    <section ref={sectionRef} id="RecentProject" className="RecentProject pt-10 bg-custom-light dark:bg-[#171717]">
      <div className="recentProject items-start justify-start mx-auto pt-10">
        <div className="titleRecentProject flex flex-col items-center overflow-hidden">
          <div className="w-full border-t border-black dark:border-gray-300 mt-2" />
          <div ref={titleRef} className="relative whitespace-nowrap" style={{ display: "inline-block" }}>
            <h1 className="font-bold text-[70px] inline-block text-black dark:text-white">
              Recent Project ━ Recent Project ━ Recent Project ━ Recent Project ━ 
              Recent Project ━ Recent Project ━ Recent Project ━ Recent Project ━ 
              Recent Project ━ Recent Project ━ Recent Project ━ Recent Project ━ 
              Recent Project ━ Recent Project ━ Recent Project ━ Recent Project ━ 
              Recent Project ━ Recent Project ━ Recent Project ━ Recent Project ━
            </h1>
          </div>
          <div className="w-full border-b border-black dark:border-gray-300 mt-2" />
        </div>

        {/* listProject 1 */}
        <div ref={addToRefs} className="listProject mt-20">
          <div className="project max-w-[1100px] h-[500px] flex flex-col lg:flex-row">
            <div className="flex flex-col justify-start p-4 text-left mt-5 w-full lg:w-1/3">
              <div className="flex space-x-2 mb-2">
                <a href="https://github.com/oliveraja/SOP_Management_System" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cursor-pointer transform transition-transform duration-200 hover:scale-110">
                  <i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff" }}></i>
                </a>
              </div>
              <h3 className="projectName text-[40px] font-semibold mt-5 text-white">
                Document Management System
              </h3>
              <p className="projectDesc mt-2 text-gray-400">A Simple website to manage document</p>
              <div className="projectTech flex mt-5">
                  {[
                  { src: "/images/laravel.png", alt: "Laravel" },
                  { src: "/images/tailwind.png", alt: "Tailwind" },
                ].map((tool) => (
                  <div className="relative w-8 h-8 mx-2 group flex justify-center items-center">
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
            <div className="flex items-end justify-end flex-1">
              <img 
                src={hoveredProject1 ? "/images/documentManager.svg" : "/images/dashboardAdminDM.png"} 
                alt="Project" 
                className="project-image w-full h-auto max-w-[665px] rounded-tl-lg rounded-br-lg transition-all duration-300 lg:w-[665px] lg:h-96" 
                onMouseEnter={() => setHoveredProject1(true)} 
                onMouseLeave={() => setHoveredProject1(false)} 
              />
            </div>
          </div>
        </div>

        {/* listProject 2 */}
        <div ref={addToRefs} className="listProject mt-10">
          <div className="project max-w-[1100px] h-[500px] flex flex-col lg:flex-row">
            <div className="flex flex-col justify-start p-4 text-left mt-5 w-full lg:w-1/3">
              <div className="flex space-x-2 mb-2">
                <a href="https://github.com/orgs/BinaryBuilders-fsw38/repositories" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cursor-pointer transform transition-transform duration-200 hover:scale-110">
                  <i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff" }}></i>
                </a>
              </div>
              <h3 className="projectName text-[40px] font-semibold mt-5 text-white">
                PINTER web
              </h3>
              <p className="projectDesc mt-2 text-gray-400">A Simple documentation website for PINTER</p>
              <div className="projectTech flex mt-5">
                  {[
                  { src: "/images/vue.png", alt: "Vue.js" },
                  { src: "/images/tailwind.png", alt: "Tailwind" },
                ].map((tool) => (
                  <div className="relative w-8 h-8 mx-2 group flex justify-center items-center">
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
            <div className="flex items-end justify-end flex-1">
                <img 
                  src={hoveredProject2 ? "/images/detailPinterWeb.svg" : "/images/pinterWeb.jpg"} 
                  alt="Project" 
                  className="project-image w-full h-auto max-w-[665px] rounded-tl-lg rounded-br-lg transition-all duration-300 lg:w-[665px] lg:h-96" 
                  onMouseEnter={() => setHoveredProject2(true)} 
                  onMouseLeave={() => setHoveredProject2(false)} 
                />
            </div>
          </div>
        </div>

        {/* listProject 3 */}
        <div ref={addToRefs} className="listProject mt-10 pb-20">
          <div className="project max-w-[1100px] h-[500px] flex flex-col lg:flex-row">
            <div className="flex flex-col justify-start p-4 text-left mt-5 w-full lg:w-1/3">
              <div className="flex space-x-2 mb-2">
                <a href="https://github.com/orgs/BinaryBuilders-fsw38/repositories" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cursor-pointer transform transition-transform duration-200 hover:scale-110">
                  <i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff" }}></i>
                </a>
                <a href="https://medium.com/@oliversebastian321/portofolio-website-skincommerce-13d808884cbb" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cursor-pointer transform transition-transform duration-200 hover:scale-110">
                  <i className="fa-brands fa-medium fa-2xl" style={{ color: "#ffffff" }}></i>
                </a>
              </div>
              <h3 className="projectName text-[40px] font-semibold mt-5 text-white">
                  skincommerce
              </h3>
              <p className="projectDesc mt-2 text-gray-400">A Simple website to purchase men skincare</p>
              <div className="projectTech flex mt-5">
                  {[
                  { src: "/images/react.png", alt: "React" },
                  { src: "/images/express.png", alt: "Express" },
                  { src: "/images/tailwind.png", alt: "Tailwind" },
                ].map((tool) => (
                  <div className="relative w-8 h-8 mx-2 group flex justify-center items-center">
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
            <div className="flex items-end justify-end flex-1">
              <img 
                src={hoveredProject3 ? "/images/detailSkincommerce.svg" : "/images/skincommerce.jpg"} 
                alt="Project" 
                className="project-image w-full h-auto max-w-[665px] rounded-tl-lg rounded-br-lg transition-all duration-300 lg:w-[665px] lg:h-96" 
                onMouseEnter={() => setHoveredProject3(true)} 
                onMouseLeave={() => setHoveredProject3(false)} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProject;