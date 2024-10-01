import AboutMe from '../components/AboutMe';
import LandingPage from '../components/LandingPage';
import Experience from '../components/Experience'

const Home = () => {
  return (
    <>
    <div className="landingPage">
      <LandingPage />
    </div>
    <div className="aboutMe">
      <AboutMe />
    </div>
    <div className="experience">
      <Experience />
    </div>
    </>
  );
};

export default Home;
