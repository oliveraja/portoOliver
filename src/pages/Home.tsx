import AboutMe from '../components/AboutMe';
import LandingPage from '../components/LandingPage';

const Home = () => {
  return (
    <>
    <div className="landingPage">
      <LandingPage />
    </div>
    <div className="aboutMe">
      <AboutMe />
    </div>
    </>
  );
};

export default Home;
