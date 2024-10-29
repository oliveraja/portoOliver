import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full px-10 sticky top-0 z-10 bg-[#191616]">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 w-full">
        <a href="#LandingPage" className="flex items-center">
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
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full mt-4`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col font-medium rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <li>
              <a
                href="#AboutMe"
                className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
                aria-current="page"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#Experience"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#RecentProject"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Recent Project
              </a>
            </li>
            <li>
              <a
                href="#ContactMe"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
