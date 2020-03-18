import React from 'react';
import Section from 'components/Section';
import styles from './Pricing.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const PricingSection: React.FC = () => {
  return (
    <Section name='prijslijst' className={styles.pricing}>
      <h3>{'Prijslijst'}</h3>
      <div className={styles.pricingContent}>
        <table className={styles.pricingTable}>
          <tr>
            <th className={styles.pricingTableHeader}>{'m2'}</th>
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
            <th className={styles.pricingTableHeader}>{'200 +'}</th>
            <td colSpan={5} className={styles.pricingTableCol}>
              <span>{'Alle onderdelen boven de 200 m2'}</span> <span className={styles.pricingTableColBold}>{'op aanvraag'}</span>
            </td>
          </tr>
        </table>
        <div className={styles.pricingDownload}>
          <h4 className={styles.pricingDownloadHeader}>{'Download hier de volledige prijslijst'}</h4>
          <div className={styles.pricingDownloadBlock}>
            <span className={styles.pricingDownloadName}>{'2Grow Tuinontwerp Prijslijst.pdf'}</span>
            <span className={styles.pricingDownloadButton}>
              <FontAwesomeIcon icon={faDownload} className={styles.pricingDownloadButtonIcon} />
            </span>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default PricingSection;
