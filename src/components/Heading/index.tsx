import React from 'react';
import styles from './Heading.module.scss';

interface Props {
  className?: string,
  noLine?: boolean,
}

const Heading: React.FC<Props> = ({ className, noLine, children }) => {
  return (
    <h3 className={`${styles.heading} ${noLine ? '' : styles.headingLine} ${className ? className : ''}`}>{children}</h3>
  );
}

export default Heading;
