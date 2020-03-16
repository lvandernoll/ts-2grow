import React from 'react';
import Section from 'components/Section';
import styles from './Landing.module.scss';

const LandingSection: React.FC = () => {
  return (
    <Section className={styles.landing}>
      <h2 className={styles.landingHeading}>{'2Grow Tuintontwerp'}</h2>
      <span className={styles.landingIntro}>{'Bent u opzoek naar een goed doordacht en creatief tuinontwerp? Dan bent u bij 2Grow tuinontwerp op het goede adres!'}</span>
    </Section>
  )
}

export default LandingSection;
