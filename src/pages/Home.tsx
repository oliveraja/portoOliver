import AboutMe from '../components/AboutMe';
import LandingPage from '../components/LandingPage';
import Experience from '../components/Experience'
import RecentProject from '../components/RecentProject';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';

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
    <div className="recentProject">
      <RecentProject />
    </div>
    <div className='contactMe'>
      <ContactMe />
    </div>
    <div className='footer'>
      <Footer />
    </div>
    </>
  );
};

export default Home;
