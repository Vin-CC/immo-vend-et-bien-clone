import styles from './ComparisonSection.module.css';

export default function ComparisonSection() {
  return (
    <>
      <div className={styles.tealBanner}>
        <h2 className={styles.tealTitle}>
          VEND &amp; BIEN votre atout Immobilier, pour une vente rapide, au prix convenu !
        </h2>
      </div>
      <section className={styles.section}>
        <div className={styles.inner}>
          {/* Colonne Vente Traditionnelle */}
          <div className={`${styles.col} ${styles.colTraditional}`}>
            <div className={styles.colHeader}>
              <svg className={styles.colIcon} viewBox="0 0 64 64" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 4L4 28h8v32h16V44h8v16h16V28h8L32 4z" />
              </svg>
              <h3 className={styles.colTitle}>Vente traditionnelle</h3>
            </div>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.iconX}>✗</span>
                Durée moyenne de vente +144 jours
              </li>
              <li className={styles.listItem}>
                <span className={styles.iconX}>✗</span>
                Financement acquéreur non vérifié
              </li>
              <li className={styles.listItem}>
                <span className={styles.iconX}>✗</span>
                Incertitude du prix de vente
              </li>
              <li className={styles.listItem}>
                <span className={styles.iconX}>✗</span>
                Visibilité limitée de votre bien
              </li>
            </ul>
          </div>

          {/* Colonne Vend & Bien */}
          <div className={`${styles.col} ${styles.colVendBien}`}>
            <div className={styles.colHeader}>
              <img
                src="https://www.immovendetbien.com/wp-content/uploads/2024/07/logo-VendEtBien-horizontal-02-BLANC-ByLevel51-e1722354176898.png"
                alt="Vend & Bien"
                className={styles.colLogo}
              />
            </div>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.iconCheck}>✓</span>
                Garantie vendeur à <strong>&nbsp;30 jours</strong>
              </li>
              <li className={styles.listItem}>
                <span className={styles.iconCheck}>✓</span>
                <strong>Qualification</strong>&nbsp;des acquéreurs
              </li>
              <li className={styles.listItem}>
                <span className={styles.iconCheck}>✓</span>
                Prix net vendeur&nbsp;<strong>optimal</strong>
              </li>
              <li className={styles.listItem}>
                <span className={styles.iconCheck}>✓</span>
                <strong>Méthode éprouvé</strong>&nbsp;portée par notre expertise
              </li>
              <li className={styles.listItem}>
                <span className={styles.iconCheck}>✓</span>
                Accompagnement global, <strong>transaction sereine et réussie.</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
