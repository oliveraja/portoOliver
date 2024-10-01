const Experience = () => {
    // Sample data array
    const experiences = [
      {
        title: "Frontend Developer",
        desc: "Developing user-friendly web applications using React and Tailwind CSS.",
      },
      {
        title: "Backend Developer",
        desc: "Creating RESTful APIs with Node.js and Express for data handling.",
      },
      {
        title: "Full-Stack Developer",
        desc: "Working on both frontend and backend technologies to deliver complete solutions.",
      },
      // Tambahkan pengalaman lainnya di sini
    ];
  
    return (
      <div className="aboutMe items-start justify-start mx-auto px-6 pt-10">
        {/* Title */}
        <div className="titleAboutMe flex">
          <h1 className="font-bold text-[70px]">Experience</h1>
        </div>
  
        {/* Looping through experiences to create boxes */}
        <div className="flex justify-start mt-8 space-x-[1rem]">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="experienceBox w-[450px] h-[160px] p-8 bg-gray-800 rounded-[30px] shadow-lg flex items-center justify-center text-center"
            >
              <div>
                <h3 className="font-bold text-white text-2xl mb-2">{experience.title}</h3>
                <p className="text-gray-400 text-lg">{experience.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Experience;
  