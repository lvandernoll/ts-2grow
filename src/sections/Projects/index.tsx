import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Section from 'components/Section';
import styles from './Projects.module.scss';
import ProjectItem from './ProjectItem';
import img from 'img/placeholder.png';

const ProjectsSection: React.FC = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const element: HTMLDivElement | null = carousel.current;
    if(element) {
      setMaxScroll(element.scrollWidth - element.offsetWidth);
      window.addEventListener('resize', () => setMaxScroll(element.scrollWidth - element.offsetWidth));
    }
  });

  const scroll = (back: boolean = false) => {
    const element: HTMLDivElement | null = carousel.current;

    if(element && element.firstElementChild) {
      const windowWidth: number = window.innerWidth > 1280 ? 1280 : window.innerWidth;
      const width: number = element.firstElementChild.clientWidth + (windowWidth / 160);
      const distance: number = back ? -width : width;
      const left:number = element.scrollLeft + distance;

      element.scroll({
        behavior: 'smooth',
        left,
      });

      setScrollLeft(Math.max(0, left));
    }
  }

  return (
    <Section name='projecten' className={styles.projects}>
      <h3>{'Projecten'}</h3>
      <p className={styles.projectsDescription}>{'Het afgelopen jaar hebben wij al (aantal) tuinen ontworpen en hier zijn we trots op. Laat u inspireren en neem eens een kijkje in ons portfolio.'}</p>
      <div className={styles.projectsCarousel}>
        <FontAwesomeIcon onClick={() => scroll(true)} icon={faChevronLeft}
          className={`${styles.projectsCarouselIcon} ${scrollLeft === 0 ? styles.projectsCarouselIconHidden : ''}`} />
        <div ref={carousel} className={styles.projectsCarouselContent}>
          <ProjectItem name={'Tuin in Naaldwijk'} pictures={[img,img, img]}
            description={'Hier komt een projectbeschrijving. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis commodo orci, facilisis auctor dolor malesuada vitae. Suspendisse turpis ligula, egestas id nisi sit amet, malesuada lacinia est. Maecenas tristique erat eget ligula lobortis, a suscipit risus ultricies. Praesent viverra malesuada tempus. Praesent nec ornare lorem. Phasellus gravida lobortis aliquam. Quisque elementum non lorem sed pellentesque. Proin tincidunt nibh nec nulla mattis, ornare molestie nisi blandit. Nulla augue eros, tempus non risus et, elementum tincidunt nulla.'}
          />
          <ProjectItem name={'Tuin in De Lier'} pictures={[img,img, img]}
            description={'Hier komt een projectbeschrijving. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis commodo orci, facilisis auctor dolor malesuada vitae. Suspendisse turpis ligula, egestas id nisi sit amet, malesuada lacinia est. Maecenas tristique erat eget ligula lobortis, a suscipit risus ultricies. Praesent viverra malesuada tempus. Praesent nec ornare lorem. Phasellus gravida lobortis aliquam. Quisque elementum non lorem sed pellentesque. Proin tincidunt nibh nec nulla mattis, ornare molestie nisi blandit. Nulla augue eros, tempus non risus et, elementum tincidunt nulla.'}
          />
          <ProjectItem name={'Tuin in Honselersdijk'} pictures={[img,img, img]}
            description={'Hier komt een projectbeschrijving. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis commodo orci, facilisis auctor dolor malesuada vitae. Suspendisse turpis ligula, egestas id nisi sit amet, malesuada lacinia est. Maecenas tristique erat eget ligula lobortis, a suscipit risus ultricies. Praesent viverra malesuada tempus. Praesent nec ornare lorem. Phasellus gravida lobortis aliquam. Quisque elementum non lorem sed pellentesque. Proin tincidunt nibh nec nulla mattis, ornare molestie nisi blandit. Nulla augue eros, tempus non risus et, elementum tincidunt nulla.'}
          />
          <ProjectItem name={'Tuin in Maasdijk'} pictures={[img,img, img]}
            description={'Hier komt een projectbeschrijving. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis commodo orci, facilisis auctor dolor malesuada vitae. Suspendisse turpis ligula, egestas id nisi sit amet, malesuada lacinia est. Maecenas tristique erat eget ligula lobortis, a suscipit risus ultricies. Praesent viverra malesuada tempus. Praesent nec ornare lorem. Phasellus gravida lobortis aliquam. Quisque elementum non lorem sed pellentesque. Proin tincidunt nibh nec nulla mattis, ornare molestie nisi blandit. Nulla augue eros, tempus non risus et, elementum tincidunt nulla.'}
          />
          <ProjectItem name={'Tuin in Poeldijk'} pictures={[img,img, img]}
            description={'Hier komt een projectbeschrijving. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis commodo orci, facilisis auctor dolor malesuada vitae. Suspendisse turpis ligula, egestas id nisi sit amet, malesuada lacinia est. Maecenas tristique erat eget ligula lobortis, a suscipit risus ultricies. Praesent viverra malesuada tempus. Praesent nec ornare lorem. Phasellus gravida lobortis aliquam. Quisque elementum non lorem sed pellentesque. Proin tincidunt nibh nec nulla mattis, ornare molestie nisi blandit. Nulla augue eros, tempus non risus et, elementum tincidunt nulla.'}
          />
        </div>
        <FontAwesomeIcon onClick={() => scroll()} icon={faChevronRight}
          className={`${styles.projectsCarouselIcon} ${scrollLeft >= maxScroll ? styles.projectsCarouselIconHidden : ''}`} />
      </div>
    </Section>
  );
}

export default ProjectsSection;
