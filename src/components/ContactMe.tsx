const ContactMe = () => {
    return (
      <section className="ContactMe bg-white flex h-screen">
        {/* Sisi Kiri */}
        <div className="w-1/2 flex flex-col justify-center p-10">
          <h1 className="text-4xl font-bold text-black">Haloo</h1>
          <h3 className="mt-4 text-lg text-gray-600">
          Because you know what happens when you say <span className="font-bold">"hello"</span>' or 'good morning?' You make a connection. And isn't that what being human is all about?
          </h3>
        </div>
        
        {/* Sisi Kanan */}
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