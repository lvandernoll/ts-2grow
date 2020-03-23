import React, { useState } from 'react';
import styles from '../WhoAreWe.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
  images: string[],
}

const PictureCarousel: React.FC<Props> = ({ images }) => {
  const [popupOpened, setPopupOpened] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {popupOpened &&
        <div className={styles.carousel} onClick={() => setPopupOpened(false)}>
          <div className={styles.carouselContent} onClick={e => e.stopPropagation()}>
            <img src={images[activeIndex]} alt='' className={styles.carouselContentImg} />
            <div className={styles.carouselContentArrows}>
              <FontAwesomeIcon icon={faChevronLeft} onClick={() => setActiveIndex(activeIndex - 1)}
                className={`${styles.carouselContentArrowsIcon} ${activeIndex === 0 ? styles.carouselContentArrowsIconHidden : ''}`} />
              <div className={styles.carouselContentIndex}>
                {images.map((img, i) =>
                  <FontAwesomeIcon icon={faCircle} key={i}
                    className={`${styles.carouselContentIndexCircle} ${i === activeIndex ? styles.carouselContentIndexCircleActive : ''}`} />
                )}
              </div>
              <FontAwesomeIcon icon={faChevronRight} onClick={() => setActiveIndex(activeIndex + 1)}
                className={`${styles.carouselContentArrowsIcon} ${activeIndex === images.length - 1 ? styles.carouselContentArrowsIconHidden : ''}`} />
            </div>
          </div>
        </div>
      }
      {images.map((img, i) =>
        <wired-image onClick={() => {
          setActiveIndex(i);
          setPopupOpened(true);
        }} src={img} key={i} class={styles.whoAreWeItemPortfolioPhoto} />
      )}
    </>
  )
}

export default PictureCarousel;
