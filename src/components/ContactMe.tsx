const ContactMe = () => {
    return (
      <section id="ContactMe" className="ContactMe bg-white flex h-screen">
        <div className="w-1/2 flex flex-col justify-center p-10">
          <h1 className="text-4xl font-bold text-black">Haloooha</h1>
          <h3 className="mt-4 text-lg text-gray-600">
            Because you know what happens when you say <span className="font-bold">"hello"</span> or "good morning?" You make a connection. And isn't that what being human is all about?
          </h3>
          <div className="flex space-x-4 mt-10 justify-center">
            <a href="mailto:oliversebastian321@gmail.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110">
              <i className="fa-solid fa-envelope fa-xl text-black"></i>
            </a>
            <a href="https://www.linkedin.com/in/oliversebastianmarpaung/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110">
              <i className="fa-brands fa-linkedin fa-xl text-black"></i>
            </a>
            <a href="https://github.com/oliveraja" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110">
              <i className="fa-brands fa-github fa-xl text-black"></i>
            </a>
            <a href="https://www.instagram.com/oliversebastian__/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110">
              <i className="fa-brands fa-instagram fa-xl text-black"></i>
            </a>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center bg-gray-100">
          {/* Placeholder untuk konten 3D */}
          <div className="w-3/4 h-3/4 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">3D Content Here</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactMe;  