import { useState, useRef, useEffect } from "react";
import '../css/Navbar.css';
import { useTheme } from "./ThemeSetting";

interface NavbarProps {
  scrollToSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Element | null;
    if (
      sidebarRef.current &&
      target &&
      !sidebarRef.current.contains(target) &&
      !target.closest(".menu-button")
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as 'light' | 'dark' | 'system' | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
    const initialTheme = savedTheme || 'system';
    setTheme(initialTheme);

    if (initialTheme === 'system') {
      if (systemTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (initialTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
}, []);

  useEffect(() => {
      localStorage.setItem("theme", theme);
      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
      } else if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
        if (systemTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    }, [theme]);

  const handleThemeChange = (mode: 'light' | 'dark' | 'system') => {
    setTheme(mode);
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full px-10 sticky top-0 z-10 bg-custom-light dark:bg-[#191616]">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 w-full">
        <a onClick={() => scrollToSection("LandingPage")} className="flex items-center cursor-pointer">
          <h1 className="text-2xl font-bold text-black dark:text-white">verver</h1>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-lg"
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen}
        >
          <i
            className={`fa-solid fa-bars fa-xl ${theme === "light" ? "text-black" : "text-white"}`}
          />
        </button>
      </div>

      <div
        ref={sidebarRef}
        className={`sidebar fixed top-0 right-0 h-full md:w-[500px] bg-[#E4E4E7] p-8 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-10 bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-300 focus:outline-none"
        >
          <i className="fa-solid fa-xmark fa-lg"></i>
        </button>

        <div className="mt-14 text-left">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Jalan jalan di website aing</h3>
          <div className="h-[2px] bg-gray-500 mb-8"></div>

          <ul className="space-y-6">
            <li>
              <h1 onClick={() => { scrollToSection("LandingPage"); setIsMenuOpen(false); }} 
                  className="text-[55px] text-gray-900 cursor-pointer hover:text-[60px] transition-all duration-300">
                  Home
              </h1>
            </li>
            <li>
              <h1 onClick={() => { scrollToSection("AboutMe"); setIsMenuOpen(false); }} 
                  className="text-[55px] text-gray-900 cursor-pointer hover:text-[60px] transition-all duration-300">
                    About
              </h1>
            </li>
            <li>
              <h1 onClick={() => { scrollToSection("Experience"); setIsMenuOpen(false); }} 
                  className="text-[55px] text-gray-900 cursor-pointer hover:text-[60px] transition-all duration-300">
                    Experience
              </h1>
            </li>
            <li>
              <h1 onClick={() => { scrollToSection("RecentProject"); setIsMenuOpen(false); }} 
                  className="text-[55px] text-gray-900 cursor-pointer hover:text-[60px] transition-all duration-300">
                    Project
              </h1>
            </li>
            <li>
              <h1 onClick={() => { scrollToSection("ContactMe"); setIsMenuOpen(false); }} 
                  className="text-[55px] text-gray-900 cursor-pointer hover:text-[60px] transition-all duration-300">
                    Contact
                </h1>
            </li>
          </ul>

          <div className="mode flex gap-4 mt-20">
            <div
              onClick={() => handleThemeChange('light')}
              className="w-12 h-12 bg-gray-300 dark:bg-gray-700 flex items-center justify-center rounded-full text-xl text-gray-800 dark:text-gray-200 cursor-pointer transform transition-transform duration-200 hover:scale-110"
            >
              <i className="fa-solid fa-sun"></i>
            </div>
            <div
              onClick={() => handleThemeChange('dark')}
              className="w-12 h-12 bg-gray-300 dark:bg-gray-700 flex items-center justify-center rounded-full text-xl text-gray-800 dark:text-gray-200 cursor-pointer transform transition-transform duration-200 hover:scale-110"
            >
              <i className="fa-solid fa-moon"></i>
            </div>
            <div
              onClick={() => handleThemeChange('system')}
              className="w-12 h-12 bg-gray-300 dark:bg-gray-700 flex items-center justify-center rounded-full text-xl text-gray-800 dark:text-gray-200 cursor-pointer transform transition-transform duration-200 hover:scale-110"
            >
              <i className="fa-solid fa-desktop"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;