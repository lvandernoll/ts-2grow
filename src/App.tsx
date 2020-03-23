import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from './App.module.scss';
import Header from 'components/Header';
import LandingSection from 'sections/Landing';
import AmbitionsSection from 'sections/Ambitions';
import WhoAreWeSection from 'sections/WhoAreWe';
import ServicesSection from 'sections/Services';
import WayOfWorkingSection from 'sections/WayOfWorking';
import ProjectsSection from 'sections/Projects';
import ContactSection from 'sections/Contact';
import PricingSection from 'sections/Pricing';

const App: React.FC = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [windowLoaded, setWindowLoaded] = useState(false);

  useEffect(() => {
    if(!windowLoaded && window.location.pathname !== '/') {
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
        setWindowLoaded(true);
      } catch(e) {
        console.error(e);
      }
    }

    const headerHeight: number = +styles.headerHeight.slice(0, -2);
    updateScroll(headerHeight);
    window.addEventListener('scroll', () => updateScroll(headerHeight));
  });

  const updateScroll = (headerHeight: number) => {
    if(!scrolledDown && window.scrollY > headerHeight) {
      setScrolledDown(true);
    } else if(scrolledDown && window.scrollY <= headerHeight) {
      setScrolledDown(false);
    }
  }

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    window.history.replaceState(null, '', './');
  }

  return (
    <>
      <Header collapsed={scrolledDown} scrollUp={scrollUp} />
      <wired-fab onClick={scrollUp} class={`${styles.icon} ${scrolledDown ? '' : styles.iconHidden}`}>
        <FontAwesomeIcon icon={faArrowUp} className={styles.iconArrow} />
      </wired-fab>
      <div className={styles.content}>
        <LandingSection />
        <AmbitionsSection />
        <WhoAreWeSection />
        <ServicesSection />
        <WayOfWorkingSection />
        <ProjectsSection />
        <PricingSection />
        <ContactSection />
      </div>
    </>
  );
}

export default App;
