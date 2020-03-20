import React, { useState } from 'react';
import styles from '../Projects.module.scss';

interface Props {
  name: string,
  description: string,
  pictures: string[],
}

const ProjectItem: React.FC<Props> = ({ name, description, pictures }) => {
  const [popupActive, setPopupActive] = useState(false);

  const togglePopup = () => {
    const body: HTMLElement | null = document.querySelector('body');
    if(body) body.style.overflow = popupActive ? 'auto' : 'hidden';
    setPopupActive(!popupActive);
  }

  return (
    <article onClick={togglePopup} className={styles.project}>
      <wired-image src={pictures[0]} alt={name} />
      <h4 className={styles.projectName}>{name}</h4>
      {popupActive &&
        <div className={styles.projectPopup}>
          <div onClick={e => e.stopPropagation()} className={styles.projectPopupContent}>
            <h5 className={styles.projectPopupContentHeader}>
              <span>{name}</span>
              <span onClick={togglePopup} className={styles.projectPopupContentHeaderCross}>X</span>
            </h5>
            <div className={styles.projectPopupContentInfo}>
              <p className={styles.projectPopupContentInfoDescription}>{description}</p>
              <div className={styles.projectPopupContentPictures}>
                {pictures.map((picture: string, i: number) =>
                  <wired-image key={i} src={picture} alt={`foto ${name} ${i}`} class={styles.projectPopupContentPicturesItem} />
                )}
              </div>
            </div>
          </div>
        </div>
      }
    </article>
  )
}

export default ProjectItem;
