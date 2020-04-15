import React, { useState } from 'react';
import styles from './Header.module.scss';
import logo from 'img/logo.svg';
import NavButton from './NavButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface Props {
  collapsed: boolean,
  scrollUp: () => void,
}

const Header: React.FC<Props> = ({ collapsed, scrollUp }) => {
  const [hamburgerOpened, setHamburgerOpened] = useState(false);

  const scrollToSection = (sectionId: string) => {
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

  const toggleHamburgerMenu = () => {
    const body: HTMLBodyElement | null = document.querySelector('body');
    if(body) {
      if(hamburgerOpened) {
        body.style.overflow = 'auto';
        setHamburgerOpened(false);
      } else {
        body.style.overflow = 'hidden';
        setHamburgerOpened(true);
      }
    }
  }

  const hamburgerItemClick = (sectionId: string) => {
    toggleHamburgerMenu();
    scrollToSection(sectionId);
  }

  return (
    <>
    <header>
        <wired-card class={`${styles.header} ${collapsed ? styles.headerOpened : ''}`} elevation='5' fill={styles.mainColor}>
          <div className={styles.headerContent}>
            <h1 onClick={scrollUp} className={styles.headerBranding}>
              <img alt='2Grow logo' src={logo} className={styles.headerBrandingLogo} />
            </h1>
            <nav className={styles.headerNav}>
              <ul className={styles.headerNavList}>
                <NavButton sectionId='over-ons' text='Over Ons' scrollFn={scrollToSection} />
                <NavButton sectionId='diensten' text='Diensten' scrollFn={scrollToSection} />
                <NavButton sectionId='werkwijze' text='Werkwijze' scrollFn={scrollToSection} />
                <NavButton sectionId='projecten' text='Projecten' scrollFn={scrollToSection} />
                <NavButton sectionId='contact' text='Contact' scrollFn={scrollToSection} />
              </ul>
            </nav>
          </div>
        </wired-card>
        <div className={styles.hamburger}>
          <wired-card fill={collapsed && !hamburgerOpened ? styles.mainColor : ''} class={styles.hamburgerButton}>
            <FontAwesomeIcon onClick={toggleHamburgerMenu} icon={hamburgerOpened ? faTimes : faBars} className={styles.hamburgerButtonIcon} />
          </wired-card>
          <wired-card fill={styles.mainColor} class={`${styles.hamburgerMenu} ${hamburgerOpened ? styles.hamburgerMenuOpened : ''}`}>
            <nav className={styles.hamburgerMenuNav}>
              <ul>
                <li onClick={() => hamburgerItemClick('ambities')} className={styles.hamburgerMenuNavItem}>{'Ambities'}</li>
                <li onClick={() => hamburgerItemClick('over-ons')} className={styles.hamburgerMenuNavItem}>{'Over Ons'}</li>
                <li onClick={() => hamburgerItemClick('diensten')} className={styles.hamburgerMenuNavItem}>{'Diensten'}</li>
                <li onClick={() => hamburgerItemClick('werkwijze')} className={styles.hamburgerMenuNavItem}>{'Werkwijze'}</li>
                <li onClick={() => hamburgerItemClick('projecten')} className={styles.hamburgerMenuNavItem}>{'Projecten'}</li>
                <li onClick={() => hamburgerItemClick('prijslijst')} className={styles.hamburgerMenuNavItem}>{'Prijslijst'}</li>
                <li onClick={() => hamburgerItemClick('contact')} className={styles.hamburgerMenuNavItem}>{'Contact'}</li>
              </ul>
            </nav>
          </wired-card>
        </div>
      </header>
    </>
  )
}

export default Header;
