import React, { useState, useEffect } from 'react';
import styles from '../Header.module.scss';

interface Props {
  sectionId: string,
  text: string,
  scrollFn: (sectionId: string) => void,
}

const NavButton: React.FC<Props> = ({ sectionId, text, scrollFn }) => {
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

  return (
    <li onClick={() => scrollFn(sectionId)} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className={styles.headerNavListItem}>
      <wired-button elevation={inView ? 4 : hover ? 3 : 0} id={`${sectionId}Button`} class={`${styles.headerNavListItemButton} ${inView ? styles.headerNavListItemButtonActive : ''}`}>
        <span className={styles.headerNavListItemButtonContent}>{text}</span>
      </wired-button>
    </li>
  );
}

export default NavButton;
