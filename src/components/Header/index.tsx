import React from 'react';
import styles from './Header.module.scss';
import logo from 'img/logo.svg';
import NavButton from './NavButton';

interface Props {
  collapsed: boolean,
  scrollUp: () => void,
}

const Header: React.FC<Props> = ({ collapsed, scrollUp }) => {
  return (
    <header>
      <wired-card class={`${styles.header} ${collapsed ? styles.headerOpened : ''}`} elevation='5' fill={styles.mainColor}>
        <div className={styles.headerContent}>
          <div onClick={scrollUp} className={styles.headerBranding}>
            <img alt='2Grow logo' src={logo} className={styles.headerBrandingLogo} />
            <h1 className={styles.headerBrandingName}>{'2Grow'}</h1>
          </div>
          <nav className={styles.headerNav}>
            <ul className={styles.headerNavList}>
              <NavButton sectionId='over-ons' text='Over Ons' />
              <NavButton sectionId='diensten' text='Diensten' />
              <NavButton sectionId='werkwijze' text='Werkwijze' />
              <NavButton sectionId='projecten' text='Projecten' />
              <NavButton sectionId='contact' text='Contact' />
            </ul>
          </nav>
        </div>
      </wired-card>
    </header>
  )
}

export default Header;
