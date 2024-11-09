const Footer = () => {
    return (
      <section>
        <footer className="bg-[url('/images/bgDark2.svg')] dark:bg-[url('/images/bgWhite2.svg')] bg-cover bg-center bg-no-repeat text-white dark:text-black px-10">
          <div className="">
            <div className="border-t-2 dark:border-black w-full"></div>
          </div>
          <div className="w-full mx-auto p-5 md:flex md:items-center md:justify-between">
            <span className="text-[80px] font-bold">verver</span>
            <p>sekian dan terimakaseh...</p>
          </div>
        </footer>
      </section>
    );
  };
  
  export default Footer;
  