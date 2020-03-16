import React from 'react';
import styles from '../Projects.module.scss';

interface Props {
  name: string,
  picture: string,
}

const ProjectItem: React.FC<Props> = ({ name, picture }) => {
  return (
    <article className={styles.project}>
      <wired-image src={picture} alt={name} />
      <h4 className={styles.projectName}>{name}</h4>
    </article>
  )
}

export default ProjectItem;
