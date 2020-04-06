import React from 'react';
import styles from './Heading.module.scss';

interface Props {
  className?: string,
}

const Heading: React.FC<Props> = ({ className, children }) => {
  return (
    <h3 className={`${styles.heading} ${className ? className : ''}`}>{children}</h3>
  );
}

export default Heading;
