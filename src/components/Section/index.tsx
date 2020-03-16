import React from 'react';
import styles from './Section.module.scss';

interface Props {
  name?: string,
  className: string,
}

const Section: React.FC<Props> = ({ name, className, children }) =>
  <wired-card id={name} class={styles.section}>
    <section className={className}>
      {children}
    </section>
  </wired-card>

export default Section;
