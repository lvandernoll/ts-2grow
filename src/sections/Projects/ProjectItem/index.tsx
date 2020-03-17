import React, { useState } from 'react';
import styles from '../Projects.module.scss';

interface Props {
  name: string,
  pictures: string[],
}

const ProjectItem: React.FC<Props> = ({ name, pictures }) => {
  const [popupActive, setPopupActive] = useState(false);

  return (
    <article onClick={() => setPopupActive(!popupActive)} className={styles.project}>
      <wired-image src={pictures[0]} alt={name} />
      <h4 className={styles.projectName}>{name}</h4>
      {popupActive &&
        <div className={styles.projectPopup}>
          <div onClick={e => e.stopPropagation()} className={styles.projectPopupContent}>
            <h5 className={styles.projectPopupContentHeader}>
              <span>{name}</span>
              <span onClick={() => setPopupActive(false)} className={styles.projectPopupContentHeaderCross}>X</span>
            </h5>
            <div className={styles.projectPopupContentPictures}>
              {pictures.map((picture: string, i: number) =>
                <wired-image key={i} src={picture} alt={`foto ${name} ${i}`} class={styles.projectPopupContentPicturesItem} />
              )}
            </div>
          </div>
        </div>
      }
    </article>
  )
}

export default ProjectItem;
