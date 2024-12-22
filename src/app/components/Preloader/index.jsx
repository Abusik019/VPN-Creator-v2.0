import Image from 'next/image';
import styles from './style.module.scss';

export const Preloader = () => {
  return (
    <div className={styles.preloader}>
        <Image 
            src='/loading.gif'
            width={64}
            height={64}
            alt='loading'
        />
    </div>
  )
}
