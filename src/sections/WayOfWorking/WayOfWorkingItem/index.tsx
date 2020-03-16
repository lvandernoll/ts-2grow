import React from 'react';
import styles from '../WayOfWorking.module.scss';

interface Props {
  title: string,
}

const WayOfWorkingItem: React.FC<Props> = ({ title, children }) =>
  <article className={styles.wayOfWorkingItem}>
    <h4 className={styles.wayOfWorkingItemHeader}>
      <span className={styles.wayOfWorkingItemHeaderIndex} />
      <span>{title}</span>
    </h4>
    <p>{children}</p>
  </article>

export default WayOfWorkingItem;
