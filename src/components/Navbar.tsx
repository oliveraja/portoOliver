const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border bg-gray-50 md:flex-row md:space-x-8">
            <li><a href="#" className="block py-2 px-3 text-blue-700">Home</a></li>
            <li><a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">About</a></li>
            <li><a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">Services</a></li>
            <li><a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">Pricing</a></li>
            <li><a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;