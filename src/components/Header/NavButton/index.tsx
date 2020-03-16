import React, { useState, useEffect } from 'react';
import styles from '../Header.module.scss';

interface Props {
  sectionId: string,
  text: string,
}

const NavButton: React.FC<Props> = ({ sectionId, text }) => {
  const [inView, setInView] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const section: HTMLElement | null = document.querySelector(`#${sectionId}`);

    if(section) {
      window.addEventListener('scroll', () => {
        const scrollWindow: number = window.scrollY + (+styles.headerHeight.slice(0, -2) + 1);
        const newInView: boolean = scrollWindow > section.offsetTop && scrollWindow < section.offsetTop + section.scrollHeight;

        if(!inView && newInView) {
          setInView(true);
        } else if(inView && !newInView) {
          setInView(false);
        }
      });
    }
  });

  const scrollToSection = () => {
    const section: HTMLElement | null = document.querySelector(`#${sectionId}`);
    const headerHeight: number = +styles.headerHeight.slice(0, -2);

    if(section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: 'smooth',
      });
      window.history.replaceState(null, '', sectionId);
    }
  }

  return (
    <li onClick={scrollToSection} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className={styles.headerNavListItem}>
      <wired-button elevation={inView ? 4 : hover ? 3 : 0} id={`${sectionId}Button`} class={styles.headerNavListItemButton}>
        {text}
      </wired-button>
    </li>
  );
}

export default NavButton;
