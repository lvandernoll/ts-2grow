import React, { useEffect } from 'react';
import 'wired-elements';
import styles from './App.module.scss';
import Header from 'components/Header';
import LandingSection from 'sections/Landing';
import AmbitionsSection from 'sections/Ambitions';
import WhoAreWeSection from 'sections/WhoAreWe';
import ServicesSection from 'sections/Services';
import WayOfWorkingSection from 'sections/WayOfWorking';
import ProjectsSection from 'sections/Projects';
import ContactSection from 'sections/Contact';

const App: React.FC = () => {
  useEffect(() => {
    if(window.location.pathname !== '/') {
      try {
        const section: HTMLElement | null = document.querySelector(`#${window.location.pathname.slice(1)}`);
        if(section) {
          setTimeout(()=>{
            window.scrollTo({
              top: section.offsetTop - +styles.headerHeight.slice(0, -2),
              behavior: 'smooth',
            });
          }, 500);
        }
      } catch(e) {
        console.error(e);
      }
    }
  });

  return (
    <>
      <Header />
      <div className={styles.content}>
        <LandingSection />
        <AmbitionsSection />
        <WhoAreWeSection />
        <ServicesSection />
        <WayOfWorkingSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}

export default App;
