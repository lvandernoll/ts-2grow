import React from 'react';
import Section from 'components/Section';
import styles from './Pricing.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Heading from 'components/Heading';

const PricingSection: React.FC = () => {
  return (
    <Section name='prijslijst' className={styles.pricing}>
      <Heading>{'Prijslijst'}</Heading>
      <div className={styles.pricingContent}>
        <table className={styles.pricingTable}>
          <thead>
            <tr>
              <th className={styles.pricingTableHeader}>{'m²'}</th>
              <th className={`${styles.pricingTableHeader} ${styles.pricingTableHeaderRotated}`}>
                {'Schetsontwerp'}
              </th>
              <th className={`${styles.pricingTableHeader} ${styles.pricingTableHeaderRotated}`}>
                {'Def. Ontwerp'}
              </th>
              <th className={`${styles.pricingTableHeader} ${styles.pricingTableHeaderRotated}`}>
                {'3D Ontwerp'}
              </th>
              <th className={`${styles.pricingTableHeader} ${styles.pricingTableHeaderRotated}`}>
                {'Werktekening'}
              </th>
              <th className={`${styles.pricingTableHeader} ${styles.pricingTableHeaderRotated}`}>
                {'Beplantingsplan'}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.pricingTableRow}>
              <th className={styles.pricingTableHeader}>{'0 - 65'}</th>
              <td className={styles.pricingTableCol}>
                <span className={styles.pricingTableColPrice}>{'€ 93,17'}</span>
              </td>
              <td className={styles.pricingTableCol}>
                <span className={styles.pricingTableColPrice}>{'€ 66,55'}</span>
              </td>
              <td className={styles.pricingTableCol}>
                <span className={styles.pricingTableColPrice}>{'€ 106,48'}</span>
              </td>
              <td className={styles.pricingTableCol}>
                <span className={styles.pricingTableColPrice}>{'€ 53,24'}</span>
              </td>
              <td className={styles.pricingTableCol}>
                <span className={styles.pricingTableColPrice}>{'€ 53,24'}</span>
              </td>
            </tr>
            <tr className={styles.pricingTableRow}>
              <th className={styles.pricingTableHeader}>{'65 - 100'}</th>
              <td className={styles.pricingTableCol}>
                <span className={styles.pricingTableColPrice}>{'€ 119,79'}</span>
              </td>
              <td className={styles.pricingTableCol}>
                <span className={styles.pricingTableColPrice}>{'€ 93,17'}</span>
              </td>
              <td className={styles.pricingTableCol}>
                <span className={styles.pricingTableColPrice}>{'€ 133,10'}</span>
              </td>
              <td className={styles.pricingTableCol}>
                <span className={styles.pricingTableColPrice}>{'€ 59,90'}</span>
              </td>
              <td className={styles.pricingTableCol}>
                <span className={styles.pricingTableColPrice}>{'€ 66,55'}</span>
              </td>
            </tr>
            <tr className={styles.pricingTableRow}>
              <th className={styles.pricingTableHeader}>{'100 - 200'}</th>
              <td className={styles.pricingTableCol}>
                <span className={styles.pricingTableColPrice}>{'€ 146,41'}</span>
              </td>
              <td className={styles.pricingTableCol}>
                <span className={styles.pricingTableColPrice}>{'€ 119,79'}</span>
              </td>
              <td className={styles.pricingTableCol}>
                <span className={styles.pricingTableColPrice}>{'€ 159,72'}</span>
              </td>
              <td className={styles.pricingTableCol}>
                <span className={styles.pricingTableColPrice}>{'€ 86,52'}</span>
              </td>
              <td className={styles.pricingTableCol}>
                <span className={styles.pricingTableColPrice}>{'€ 93,17'}</span>
              </td>
            </tr>
            <tr className={styles.pricingTableRow}>
              <th className={styles.pricingTableHeader}>{'200+'}</th>
              <td colSpan={5} className={styles.pricingTableCol}>
                <span>{'Alle onderdelen boven de 200 m²'}</span> <span className={styles.pricingTableColBold}>{'op aanvraag'}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.pricingDownload}>
          <h4 className={styles.pricingDownloadHeader}>{'Zie hier de volledige prijslijst'}</h4>
          <div className={styles.pricingDownloadBlock}>
            <div className={styles.pricingDownloadText}>
              <span>{'2Grow Tuinontwerp Prijslijst.pdf'}</span>
              <span className={styles.pricingDownloadSize}>{'Grootte: 681kb'}</span>
            </div>
            <a href='/2Grow Tuinontwerp Prijslijst.pdf' target='_blank' rel='noopener noreferrer' className={styles.pricingDownloadButton}>
              <FontAwesomeIcon icon={faDownload} className={styles.pricingDownloadButtonIcon} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default PricingSection;
