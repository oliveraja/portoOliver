import { useEffect, useRef, useState } from "react";
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

  const [hoveredProject1, setHoveredProject1] = useState(false);
  const [hoveredProject2, setHoveredProject2] = useState(false);
  const [hoveredProject3, setHoveredProject3] = useState(false);

  return (
    <div className="recentProject items-start justify-start mx-auto px-6 pt-10">
      <div className="titleRecentProject flex flex-col items-center overflow-hidden">
        <div className="w-full border-t border-gray-300" />
        <div ref={titleRef} className="relative whitespace-nowrap" style={{ display: "inline-block" }}>
          <h1 className="font-bold text-[70px] inline-block">
            Recent Project ━ Recent Project ━ Recent Project ━ Recent Project ━ Recent Project ━
          </h1>
        </div>
        <div className="w-full border-b border-gray-300 mt-2" />
      </div>
      {/* listProject 1 */}
      <div className="listProject mt-20">
        <div className="max-w-[1000px] h-[450px] mx-auto flex border border-gray-300 rounded-lg">
          <div className="flex flex-col justify-start p-4 text-left mt-5 w-1/3">
            <div className="flex space-x-2 mb-2">
              <a href="https://github.com/oliveraja/SOP_Management_System" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="cursor-pointer">
                <i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff" }}></i>
              </a>
            </div>
            <h3 className="projectName text-[40px] font-semibold mt-5">
              <a 
                href="#" 
                className="hover:scale-105 transition-transform duration-200"
              >
                Document Management System
              </a>
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
              className="w-[665px] h-96 rounded-tl-lg rounded-br-lg transition-all duration-300" 
              onMouseEnter={() => setHoveredProject1(true)} 
              onMouseLeave={() => setHoveredProject1(false)} 
            />
          </div>
        </div>
      </div>

      {/* listProject 2 */}
      <div className="listProject mt-10">
        <div className="max-w-[1000px] h-[450px] mx-auto flex border border-gray-300 rounded-lg">
          <div className="flex items-start justify-end flex-1">
              <img 
                src={hoveredProject2 ? "/images/detailPinterWeb.svg" : "/images/pinterWeb.jpg"} 
                alt="Project" 
                className="w-[665px] h-96 rounded-tl-lg rounded-br-lg transition-all duration-300" 
                onMouseEnter={() => setHoveredProject2(true)} 
                onMouseLeave={() => setHoveredProject2(false)} 
              />
          </div>
          <div className="flex flex-col justify-end p-4 text-left mt-5 w-1/3">
            <div className="flex space-x-2 mb-2">
              <a href="https://github.com/orgs/BinaryBuilders-fsw38/repositories" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="cursor-pointer">
                <i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff" }}></i>
              </a>
            </div>
            <h3 className="projectName text-[40px] font-semibold mt-5">
              <a 
                href="#" 
                className="hover:scale-105 transition-transform duration-200"
              >
                PINTER web
              </a>
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
        </div>
      </div>

      {/* listProject 3 */}
      <div className="listProject mt-10">
        <div className="max-w-[1000px] h-[450px] mx-auto flex border border-gray-300 rounded-lg">
          <div className="flex flex-col justify-start p-4 text-left mt-5 w-1/3">
            <div className="flex space-x-2 mb-2">
              <a href="https://github.com/orgs/BinaryBuilders-fsw38/repositories" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="cursor-pointer">
                <i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff" }}></i>
              </a>
              <a href="https://medium.com/@oliversebastian321/portofolio-website-skincommerce-13d808884cbb" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="cursor-pointer">
                <i className="fa-brands fa-medium fa-2xl" style={{ color: "#ffffff" }}></i>
              </a>
            </div>
            <h3 className="projectName text-[40px] font-semibold mt-5">
              <a 
                href="#" 
                className="hover:scale-105 transition-transform duration-200"
              >
                skincommerce
              </a>
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
              className="w-[665px] h-96 rounded-tl-lg rounded-br-lg transition-all duration-300" 
              onMouseEnter={() => setHoveredProject3(true)} 
              onMouseLeave={() => setHoveredProject3(false)} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProject;