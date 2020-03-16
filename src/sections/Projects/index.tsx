import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Section from 'components/Section';
import styles from './Projects.module.scss';
import ProjectItem from './ProjectItem';
import img from 'img/placeholder.png';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const ProjectsSection: React.FC = () => {
  return (
    <Section name='projecten' className={styles.projects}>
      <h3>{'Projecten'}</h3>
      <p className={styles.projectsDescription}>{'Het afgelopen jaar hebben wij al (aantal) tuinen ontworpen en hier zijn we trots op. Laat u inspireren en neem eens een kijkje in ons portfolio.'}</p>
      <Carousel
        arrowLeft={<FontAwesomeIcon icon={faChevronLeft} className={`${styles.projectsSliderIcon} ${styles.projectsSliderIconBack}`} />}
        arrowRight={<FontAwesomeIcon icon={faChevronRight} className={`${styles.projectsSliderIcon} ${styles.projectsSliderIconNext}`} />}
        addArrowClickHandler
        slidesPerPage={3}
        offset={+styles.defaultSpacing.slice(0, -2)}
        infinite
        autoPlay={3500}
        stopAutoPlayOnHover
      >
        <ProjectItem name={'Tuin in Naaldwijk'} picture={img} />
        <ProjectItem name={'Tuin in De Lier'} picture={img} />
        <ProjectItem name={'Tuin in Honselersdijk'} picture={img} />
        <ProjectItem name={'Tuin in Maasdijk'} picture={img} />
        <ProjectItem name={'Tuin in Poeldijk'} picture={img} />
      </Carousel>
    </Section>
  );
}

export default ProjectsSection;
