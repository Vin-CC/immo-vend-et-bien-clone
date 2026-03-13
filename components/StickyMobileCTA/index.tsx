import styles from './StickyMobileCTA.module.css';

export default function StickyMobileCTA() {
  return (
    <div className={styles.sticky}>
      <p className={styles.text}>Vérifiez votre éligibilité, vous avez :</p>
      <div className={styles.buttons}>
        <a href="#header-form" className={styles.btn}>Une maison</a>
        <a href="#header-form" className={styles.btn}>Un appartement</a>
      </div>
    </div>
  );
}
