import React from 'react';
import Section from 'components/Section';
import styles from './Ambitions.module.scss';
import img from 'img/placeholder.png';
import Heading from 'components/Heading';

const AmbitionsSection: React.FC = () =>
  <Section name='ambities' className={styles.ambitions}>
    <Heading>{'Ambities'}</Heading>
    <div className={styles.ambitionsContent}>
      <p className={styles.ambitionsContentParagraph}>
        {'Wij van 2Grow zijn twee studenten die ons richten op het ontwerpen van particuliere tuinen en bedrijfstuinen. Wij hebben ervaring in het groen en doen nu een studie Tuin- en Landschapsinrichting te Velp. Wij zijn in 2018 gestart met een eigen ontwerpbedrijfje en hebben als doelstelling om te groeien in onze vaardigheden en uw droomtuin te ontwerpen.'}
      </p>
      <wired-image src={img} class={styles.ambitionsImg} />
    </div>
  </Section>

export default AmbitionsSection;
