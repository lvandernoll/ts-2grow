import React from 'react';
import Section from 'components/Section';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Heading from 'components/Heading';

const ContactSection: React.FC = () => {
  return (
    <Section name='contact' filled className={styles.contact}>
      <footer>
        <Heading className={styles.contactHeader}>{'Contact'}</Heading>
        <p className={styles.contactDescription}>
          {'Bent u enthousiast geraakt over onze diensten en wilt u hier gebruik van maken, neem dan vrijblijvend contact op.'}
        </p>
        <div className={styles.contactLinks}>
          <a href='tel:+640119833' className={styles.contactLinksItem}>
            <FontAwesomeIcon icon={faPhone} className={styles.contactLinksItemIcon} />
            <span>{'06 - 40 11 98 33'}</span>
          </a>
          <a href='https://goo.gl/maps/tZonVcE3nVbk3ERQA' target='_blank' rel='noopener noreferrer' className={styles.contactLinksItem}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.contactLinksItemIcon} />
            <span>{'Korte Kruisweg 82, 2678 BS Maasdijk'}</span>
          </a>
          <a href='mailto:2growtuinontwerp@gmail.com' className={styles.contactLinksItem}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.contactLinksItemIcon} />
            <span>{'2growtuinontwerp@gmail.com'}</span>
          </a>
          <a href='https://www.facebook.com/2GrowTuinontwerp/' target='_blank' rel='noopener noreferrer' className={styles.contactLinksItem}>
            <FontAwesomeIcon icon={['fab', 'facebook']} className={styles.contactLinksItemIcon} />
            <span>{'2GrowTuinontwerp'}</span>
          </a>
        </div>
      </footer>
    </Section>
  )
}

export default ContactSection;
