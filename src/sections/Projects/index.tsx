import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Section from 'components/Section';
import styles from './Projects.module.scss';
import ProjectItem from './ProjectItem';
import img from 'img/placeholder.png';

const ProjectsSection: React.FC = () => {
  const carousel = useRef<HTMLDivElement>(null);

  const scroll = (back: boolean = false) => {
    if(carousel.current && carousel.current.firstElementChild) {
      const windowWidth: number = window.innerWidth > 1280 ? 1280 : window.innerWidth;
      const width: number = carousel.current.firstElementChild.clientWidth + (windowWidth / 160);
      const distance: number = back ? -width : width;

      carousel.current.scroll({
        behavior: 'smooth',
        left: carousel.current.scrollLeft + distance,
      });
    }
  }

  return (
    <Section name='projecten' className={styles.projects}>
      <h3>{'Projecten'}</h3>
      <p className={styles.projectsDescription}>{'Het afgelopen jaar hebben wij al (aantal) tuinen ontworpen en hier zijn we trots op. Laat u inspireren en neem eens een kijkje in ons portfolio.'}</p>
      <div className={styles.projectsCarousel}>
        <FontAwesomeIcon onClick={() => scroll(true)} icon={faChevronLeft} className={styles.projectsCarouselIcon} />
        <div ref={carousel} className={styles.projectsCarouselContent}>
          <ProjectItem name={'Tuin in Naaldwijk'} pictures={[img,img, img]} />
          <ProjectItem name={'Tuin in De Lier'} pictures={[img,img, img]} />
          <ProjectItem name={'Tuin in Honselersdijk'} pictures={[img,img, img]} />
          <ProjectItem name={'Tuin in Maasdijk'} pictures={[img,img, img]} />
          <ProjectItem name={'Tuin in Poeldijk'} pictures={[img,img, img]} />
        </div>
        <FontAwesomeIcon onClick={() => scroll()} icon={faChevronRight} className={styles.projectsCarouselIcon} />
      </div>
    </Section>
  );
}

export default ProjectsSection;
