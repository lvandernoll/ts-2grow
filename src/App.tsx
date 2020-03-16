import React from 'react';
import 'wired-elements';
import styles from './App.module.scss';
import Header from 'components/Header';
import LandingSection from 'sections/Landing';
import AmbitionsSection from 'sections/Ambitions';
import WhoAreWeSection from 'sections/WhoAreWe';
import OurServicesSection from 'sections/OurServices';
import WayOfWorkingSection from 'sections/WayOfWorking';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <LandingSection />
        <AmbitionsSection />
        <WhoAreWeSection />
        <OurServicesSection />
        <WayOfWorkingSection />
      </div>
    </>
  );
}

export default App;
