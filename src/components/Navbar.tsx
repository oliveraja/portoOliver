import { useState, useRef, useEffect } from "react";

interface NavbarProps {
  scrollToSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
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
    // Set the theme based on the system preference initially
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
    if (theme === 'system') {
      setTheme(systemTheme);
    }
  }, [theme]);

  const handleThemeChange = (mode: 'light' | 'dark' | 'system') => {
    setTheme(mode);
    if (mode === 'light') {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    } else if (mode === 'dark') {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode', 'dark-mode');
    }
  };

  return (
    <nav className="w-full px-10 sticky top-0 z-10 bg-[#191616]">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 w-full">
        <a
          onClick={() => scrollToSection("LandingPage")}
          className="flex items-center cursor-pointer"
        >
          <h1 className="text-2xl font-bold">verver</h1>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg"
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen}
        >
          <i className="fa-solid fa-bars fa-xl" style={{ color: "#ffffff" }}></i>
        </button>
      </div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-[500px] bg-[#E4E4E7] p-8 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* icon close */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-10 bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-300 focus:outline-none"
        >
          <i className="fa-solid fa-xmark fa-lg"></i>
        </button>

        {/* isi sidebar */}
        <div className="mt-14 text-left">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Jalan jalan di website aing</h3>
          <div className="h-[2px] bg-gray-500 mb-8"></div>

          <ul className="space-y-6">
            <li>
              <h1
                onClick={() => {
                  scrollToSection("LandingPage");
                  setIsMenuOpen(false);
                }}
                className="text-[55px] text-gray-900 cursor-pointer hover:text-blue-700 dark:hover:text-blue-400"
              >
                Home
              </h1>
            </li>
            <li>
              <h1
                onClick={() => {
                  scrollToSection("AboutMe");
                  setIsMenuOpen(false);
                }}
                className="text-[55px] text-gray-900 cursor-pointer hover:text-blue-700 dark:hover:text-blue-400"
              >
                About
              </h1>
            </li>
            <li>
              <h1
                onClick={() => {
                  scrollToSection("Experience");
                  setIsMenuOpen(false);
                }}
                className="text-[55px] text-gray-900 cursor-pointer hover:text-blue-700 dark:hover:text-blue-400"
              >
                Experience
              </h1>
            </li>
            <li>
              <h1
                onClick={() => {
                  scrollToSection("RecentProject");
                  setIsMenuOpen(false);
                }}
                className="text-[55px] text-gray-900 cursor-pointer hover:text-blue-700 dark:hover:text-blue-400"
              >
                Project
              </h1>
            </li>
            <li>
              <h1
                onClick={() => {
                  scrollToSection("ContactMe");
                  setIsMenuOpen(false);
                }}
                className="text-[55px] text-gray-900 cursor-pointer hover:text-blue-700 dark:hover:text-blue-400"
              >
                Contact
              </h1>
            </li>
          </ul>
          <div className="mode flex gap-4 mt-10">
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
