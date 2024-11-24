// Home.tsx
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';
import LandingPage from '../components/LandingPage';
import Experience from '../components/Experience';
import RecentProject from '../components/RecentProject';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';

const Home = () => {
  const landingPageRef = useRef<HTMLElement>(null);
  const aboutMeRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const recentProjectRef = useRef<HTMLElement>(null);
  const contactMeRef = useRef<HTMLElement>(null);

  const scrollToSection = (section: string) => {
    switch (section) {
      case 'LandingPage':
        landingPageRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'AboutMe':
        aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Experience':
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'RecentProject':
        recentProjectRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'ContactMe':
        contactMeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrollToSection={scrollToSection} />

      <main className="flex-grow">
        <section ref={landingPageRef} id="LandingPage" className="landingPage">
          <LandingPage />
        </section>
        
        <section ref={aboutMeRef} id="AboutMe" className="aboutMe">
          <AboutMe />
        </section>
        
        <section ref={experienceRef} id="Experience" className="experience">
          <Experience />
        </section>
        
        <section ref={recentProjectRef} id="RecentProject" className="recentProject">
          <RecentProject />
        </section>
        
        <section ref={contactMeRef} id="ContactMe" className="contactMe">
          <ContactMe />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;