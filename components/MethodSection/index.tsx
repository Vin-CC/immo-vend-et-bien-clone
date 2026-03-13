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
                Nos 3 estimations complémentaires permettent de révéler tout le potentiel de votre bien et d&apos;en optimiser la valeur.
              </p>
              <p className={styles.blockText}>3 estimations qui valorisent votre bien.</p>
              <ul className={styles.blockList}>
                <li><strong>Structurelle</strong> : pour déceler la valeur unique de votre bien</li>
                <li><strong>Marché</strong> : pour élaborer une stratégie d&apos;acquisition acquéreurs</li>
                <li><strong>Concurrentielle</strong> : pour réaliser une vente rapide au meilleur prix</li>
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
              <p className={styles.blockText}>Vendez plus vite, avec plus de visibilité !</p>
              <p className={styles.blockText}>
                Grâce à notre stratégie digitale avancée, offrez à votre bien une visibilité maximale et attirez des acquéreurs ciblés, avant même la mise en ligne de votre annonce.
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
              <p className={styles.blockText}>Votre projet, guidé par notre engagement.</p>
              <ul className={styles.blockList}>
                <li>Disponible 7j/7, de 8h à 20h, 365 jours par an.</li>
                <li>Estimation en 48h.</li>
              </ul>
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
