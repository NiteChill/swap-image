import styles from './ImagesComponent.module.scss';

import { images } from '../../datas/images';

export default function ImagesComponent({ imageNumber }) {
  return (
    <div className='d-flex-row w-full bora-36 ai-center jc-center overflow-hidden'>
      <img
        src={images[imageNumber]}
        alt={JSON.stringify(images.nbr1)}
        className={styles.imagesComponent}
      />
    </div>
  );
};