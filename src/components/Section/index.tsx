import React from 'react';
import styles from './Section.module.scss';

interface Props {
  name?: string,
  className: string,
  filled?: boolean,
}

const Section: React.FC<Props> = ({ name, className, filled, children }) =>
  <wired-card id={name} class={styles.section} fill={`${filled ? styles.mainColor : ''}`}>
    <section className={className}>
      {children}
    </section>
  </wired-card>

export default Section;
