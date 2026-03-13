import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <img
          src="https://www.immovendetbien.com/wp-content/uploads/2024/07/logo-VendEtBien-horizontal-02-BLANC-ByLevel51-e1722354176898.png"
          alt="Vend & Bien"
          className={styles.logo}
        />
        <p className={styles.copyright}>Tous droits réservés – Vend&amp;Bien – 2025</p>
        <p className={styles.credit}>
          Site, stratégie, et publicités forgés dans la jungle de{' '}
          <a href="https://tribup.fr/" target="_blank" rel="noopener noreferrer">Trib&apos;up</a>
        </p>
        <nav className={styles.links}>
          <a href="#">Honoraires</a>
          <a href="#">Mentions légales</a>
          <a href="#">Politique de confidentialité</a>
        </nav>
      </div>
    </footer>
  );
}
