import React from 'react';
import Section from 'components/Section';
import styles from './Services.module.scss';
import AccordeonTab from 'components/AccordeonTab';

const ServicesSection: React.FC = () =>
  <Section name='diensten' className={styles.services}>
    <div className={styles.servicesContent}>
      <h3>{'Diensten'}</h3>
      <div className={styles.servicesAccordeon}>
        <AccordeonTab initialActive
          header={'Het maken van een (persoonlijk) tuinontwerp'}
          content={'Hier komt een uitgebreide uitleg van de opengeklapte dienst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis commodo orci, facilisis auctor dolor malesuada vitae. Suspendisse turpis ligula, egestas id nisi sit amet, malesuada lacinia est. Maecenas tristique erat eget ligula lobortis, a suscipit risus ultricies. Praesent viverra malesuada tempus. Praesent nec ornare lorem. Phasellus gravida lobortis aliquam. Quisque elementum non lorem sed pellentesque. Proin tincidunt nibh nec nulla mattis, ornare molestie nisi blandit. Nulla augue eros, tempus non risus et, elementum tincidunt nulla.'}
        />
        <AccordeonTab
          header={'Een beplantingsplan'}
          content={'Hier komt een uitgebreide uitleg van de opengeklapte dienst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis commodo orci, facilisis auctor dolor malesuada vitae. Suspendisse turpis ligula, egestas id nisi sit amet, malesuada lacinia est. Maecenas tristique erat eget ligula lobortis, a suscipit risus ultricies. Praesent viverra malesuada tempus. Praesent nec ornare lorem. Phasellus gravida lobortis aliquam. Quisque elementum non lorem sed pellentesque. Proin tincidunt nibh nec nulla mattis, ornare molestie nisi blandit. Nulla augue eros, tempus non risus et, elementum tincidunt nulla.'}
        />
        <AccordeonTab
          header={'Een 3D-ontwerp'}
          content={'amet, malesuada lacinia est. Maecenas tristique erat eget ligula lobortis, a suscipit risus ultricies. Praesent viverra malesuada tempus. Praesent nec ornare lorem. Phasellus gravida lobortis aliquam. Quisque elementum non lorem sed pellentesque. Proin tincidunt nibh nec nulla mattis, ornare molestie nisi blandit. Nulla augue eros, tempus non risus et, elementum tincidunt nulla.'}
        />
        <AccordeonTab
          header={'Een verlichtingsplan'}
          content={'Hier komt een uitgebreide uitleg van de opengeklapte dienst. Hier komt een uitgebreide uitleg van de opengeklapte dienst.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis commodo orci, facilisis auctor dolor malesuada vitae. Suspendisse turpis ligula, egestas id nisi sit amet, malesuada lacinia est. Maecenas tristique erat eget ligula lobortis, a suscipit risus ultricies. Praesent viverra malesuada tempus. Praesent nec ornare lorem. Phasellus gravida lobortis aliquam. Quisque elementum non lorem sed pellentesque. Proin tincidunt nibh nec nulla mattis, ornare molestie nisi blandit. Nulla augue eros, tempus non risus et, elementum tincidunt nulla.'}
        />
        <AccordeonTab
          header={'Een technische tekening voor de uitvoering'}
          content={'Hier komt een uitgebreide uitleg van de opengeklapte dienst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis commodo orci, facilisis auctor dolor malesuada vitae. Suspendisse turpis ligula, egestas id nisi sit amet, malesuada lacinia est. Maecenas tristique erat eget ligula lobortis, a suscipit risus ultricies. Praesent viverra malesuada tempus. Praesent nec ornare lorem. Phasellus gravida lobortis aliquam. Quisque elementum non lorem sed pellentesque. Proin tincidunt nibh nec nulla mattis, ornare molestie nisi blandit. Nulla augue eros, tempus non risus et, elementum tincidunt nulla.'}
        />
        <AccordeonTab
          header={'Een technische- en bouwkundige uitvoering'}
          content={'Hier komt een uitgebreide uitleg van de opengeklapte dienst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis commodo orci, facilisis auctor dolor malesuada vitae. Suspendisse turpis ligula, egestas id nisi sit amet, malesuada lacinia est. Maecenas tristique erat eget ligula lobortis, a suscipit risus ultricies. Praesent viverra malesuada tempus. Praesent nec ornare lorem. Phasellus gravida lobortis aliquam. Quisque elementum non lorem sed pellentesque. Proin tincidunt nibh nec nulla mattis, ornare molestie nisi blandit. Nulla augue eros, tempus non risus et, elementum tincidunt nulla.'}
        />
      </div>
    </div>
  </Section>

export default ServicesSection;
