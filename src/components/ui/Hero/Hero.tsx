
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.heroTitleContainer}>
            <h2>Super Flash Sale <span>50% OFF</span></h2>
        </div>
    </div>
  )
}
