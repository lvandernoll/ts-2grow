import React from 'react';
import Section from 'components/Section';
import WayOfWorkingItem from './WayOfWorkingItem';
import styles from './WayOfWorking.module.scss';

const WayOfWorkingSection: React.FC = () =>
  <Section name='werkwijze' className={styles.wayOfWorking}>
    <h3>{'Werkwijze'}</h3>
    <div className={styles.wayOfWorkingRow}>
      <WayOfWorkingItem title={'Kennismaken'}>
        {'Wanneer jullie gebruik willen maken van onze diensten, komen we graag eens langs voor een oriënterend gesprek. Tijdens dit gesprek kunnen we jullie wensen inventariseren, maar ook laten zien wat we voor jullie kunnen betekenen.'}
      </WayOfWorkingItem>
    </div>
    <div className={styles.wayOfWorkingRow}>
      <div className={`${styles.wayOfWorkingRowArrow} ${styles.wayOfWorkingRowArrow1}`}></div>
      <WayOfWorkingItem title={'Schetsfase'}>
        {'Na dit eerste gesprek maken we twee schetsen van de tuin. Deze komen we graag bij jullie presenteren, met als doelstelling dat we dit kunnen gebruiken als vertrekpunt naar een verdere uitwerking. Om deze schetsen beeldend te maken, voegen we hier een moodboard met referentiebeelden aan toe.'}
      </WayOfWorkingItem>
    </div>
    <div className={styles.wayOfWorkingRow}>
      <WayOfWorkingItem title={'Ontwerpfase'}>
        {'Na de schetsfase wordt de schets uitgewerkt naar een definitief ontwerp. Dit kan door middel van een plattegrond of door een 3D-visualisatie. Bij deze stap moeten veel keuzes gemaakt worden m.b.t. de materialen (zoals bestratingen, verlichtingen en bouwkundige constructies), maar ook de beplantingen (bomen, heesters, vaste planten). Wij inspireren jullie graag door naar een leverancier te gaan, om materialen te bekijken of eens langs een plantenkwekerij te gaan.'}
      </WayOfWorkingItem>
      <div className={`${styles.wayOfWorkingRowArrow} ${styles.wayOfWorkingRowArrow2}`}></div>
    </div>
    <div className={styles.wayOfWorkingRow}>
      <div className={`${styles.wayOfWorkingRowArrow} ${styles.wayOfWorkingRowArrow3}`}></div>
      <WayOfWorkingItem title={'Realisatiefase / uitvoeringsfase'}>
        {'Wij houden ons expliciet bezig met het ontwerp van de tuin en voeren dus zelf geen aanlegwerkzaamheden uit. Wel hebben we connecties die dit kunnen uitvoeren. Zo kunnen we u koppelen aan een hovenier en al snel aangeven wat het uitvoeren van het tuinontwerp gaat kosten.'}
      </WayOfWorkingItem>
    </div>
  </Section>

export default WayOfWorkingSection;
