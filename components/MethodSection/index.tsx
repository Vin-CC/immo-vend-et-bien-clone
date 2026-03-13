import styles from './MethodSection.module.css';

export default function MethodSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Notre méthode pour une vente garantie</h2>
        <div className={styles.blocks}>
          {/* Bloc 1 - texte gauche, image droite */}
          <div className={styles.block}>
            <div className={`${styles.textCol} ${styles.textColLeft}`}>
              <span className={styles.badge}>Étape 1</span>
              <h3 className={styles.blockTitle}>Estimation fiable</h3>
              <p className={styles.blockText}>
                Nos 3 estimations complémentaires vous assurent une évaluation précise et réaliste de votre bien :
              </p>
              <ul className={styles.blockList}>
                <li>Structurelle</li>
                <li>Marché</li>
                <li>Concurrentielle</li>
              </ul>
            </div>
            <div
              className={styles.imageCol}
              style={{ backgroundImage: `url('https://www.immovendetbien.com/wp-content/uploads/2025/06/Estimation_web.jpg')` }}
            ></div>
          </div>

          {/* Bloc 2 - image gauche, texte droite */}
          <div className={`${styles.block} ${styles.blockReverse}`}>
            <div className={`${styles.textCol} ${styles.textColRight}`}>
              <span className={styles.badge}>Étape 2</span>
              <h3 className={styles.blockTitle}>Stratégie digitale optimale</h3>
              <p className={styles.blockText}>
                Vendez plus vite, avec plus de visibilité ! Notre stratégie digitale multi-canaux maximise l&apos;exposition de votre bien et attire les meilleurs acquéreurs.
              </p>
            </div>
            <div
              className={styles.imageCol}
              style={{ backgroundImage: `url('https://www.immovendetbien.com/wp-content/uploads/2024/05/Digital.png')` }}
            ></div>
          </div>

          {/* Bloc 3 - texte gauche, image droite */}
          <div className={styles.block}>
            <div className={`${styles.textCol} ${styles.textColLeft}`}>
              <span className={styles.badge}>Étape 3</span>
              <h3 className={styles.blockTitle}>Votre projet, notre priorité absolue !</h3>
              <p className={styles.blockText}>
                Votre projet, guidé par notre engagement. Disponible 7j/7, nous vous accompagnons à chaque étape pour une vente sereine et réussie.
              </p>
            </div>
            <div
              className={styles.imageCol}
              style={{ backgroundImage: `url('https://www.immovendetbien.com/wp-content/uploads/2025/08/photo_equipe.png')` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
