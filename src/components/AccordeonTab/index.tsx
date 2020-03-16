import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './AccordeonTab.module.scss';

interface Props {
  initialActive?: boolean,
  header: string,
  content: string,
}

const AccordeonTab: React.FC<Props> = ({ initialActive, header, content }) => {
  const [active, setActive] = useState(initialActive);

  const onClick = () => setActive(!active);

  return (
    <wired-card class={`${styles.accordeonTab}  ${active ? styles.accordeonTabActive : ''}`}>
      <wired-card onClick={onClick} fill={active ? styles.mainColor : ''} class={styles.accordeonTabHeader}>
        <div className={styles.accordeonTabHeaderContent}>
          <span className={styles.accordeonTabHeaderContentText}>{header}</span>
          <FontAwesomeIcon icon={faCaretDown} className={styles.accordeonTabHeaderContentIcon} />
        </div>
      </wired-card>
      <p className={styles.accordeonTabContent}>
        {content}
      </p>
    </wired-card>
  );
}

export default AccordeonTab;
