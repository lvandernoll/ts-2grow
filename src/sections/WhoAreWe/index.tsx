import React from 'react';
import Section from 'components/Section';
import styles from './WhoAreWe.module.scss';
import img from 'img/placeholder.png';
import PictureCarousel from './PictureCarousel';
import Heading from 'components/Heading';

const WhoAreWeSection: React.FC = () =>
  <Section name='over-ons' className={styles.whoAreWe}>
    <div className={styles.whoAreWeItem}>
      <wired-image src={img} class={styles.whoAreWeItemPortret} />
      <div className={styles.whoAreWeItemInfo}>
        <Heading noLine className={styles.whoAreWeItemInfoName}>
          <span>{'Chris de Rijke'}</span>
          <span className={styles.whoAreWeItemInfoNameDash}>{' - '}</span>
          <span className={styles.whoAreWeItemInfoNameTitle}>{'ontwerper & technisch ontwerper'}</span>
        </Heading>
        <p>
          {'“Het gezamenlijk ontwerpen van jullie droomtuin, geeft mij veel energie. Ik probeer jullie wensen te vertalen in een bijpassend tuinontwerp en zal jullie inspireren over de mogelijkheden.“'}
        </p>
        <div className={styles.whoAreWeItemPortfolio}>
          <PictureCarousel images={[img, img, img]} />
        </div>
      </div>
    </div>
    <wired-card class={styles.whoAreWeDivider}>&nbsp;</wired-card>
    <div className={styles.whoAreWeItem}>
      <wired-image src={img} class={styles.whoAreWeItemPortret} />
      <div className={styles.whoAreWeItemInfo}>
        <Heading noLine className={styles.whoAreWeItemInfoName}>
          <span>{'Nico van der Noll'}</span>
          <span className={styles.whoAreWeItemInfoNameDash}>{' - '}</span>
          <span className={styles.whoAreWeItemInfoNameTitle}>{'3D ontwerper'}</span>
        </Heading>
        <p>
          {'“Ik vind het een uitdaging om een tuin zó te visualiseren, dat het voor de klant duidelijk is, hoe de tuin er uit komt te zien. Hiervoor gebruik ik doorsnedes en 3D-visualisaties. Door deze visualisaties wordt het beste inzichtelijk hoe de tuin kan worden. “'}
        </p>
        <div className={styles.whoAreWeItemPortfolio}>
          <PictureCarousel images={[img, img, img]} />
        </div>
      </div>
    </div>
  </Section>

export default WhoAreWeSection;
