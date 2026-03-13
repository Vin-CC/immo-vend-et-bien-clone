'use client';

import { useEffect } from 'react';
import styles from './EligibilitySection.module.css';

export default function EligibilitySection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?13b4318507bb4209bc2699f24b0';
    script.defer = true;
    script.async = true;
    const container = document.getElementById('trustindex-eligibility');
    if (container) container.appendChild(script);
  }, []);

  return (
    <section className={styles.section} id="eligibilite">
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Vérifiez en 1 clic si vous êtes éligible à notre garantie
        </h2>
        <div className={styles.cards}>
          <div
            className={styles.card}
            style={{ backgroundImage: `url('https://www.immovendetbien.com/wp-content/uploads/2025/07/Maison-1024x788.jpg')` }}
          >
            <div className={styles.cardOverlay}></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>J&apos;ai une maison</h3>
              <a href="#header-form" className={styles.cardBtn}>
                Je vérifie l&apos;éligibilité de mon bien
              </a>
            </div>
          </div>
          <div
            className={styles.card}
            style={{ backgroundImage: `url('https://www.immovendetbien.com/wp-content/uploads/2024/05/francesca-tosolini-tHkJAMcO3QE-unsplash-1024x683.jpg')` }}
          >
            <div className={styles.cardOverlay}></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>J&apos;ai un appartement</h3>
              <a href="#header-form" className={styles.cardBtn}>
                Je vérifie l&apos;éligibilité de mon bien
              </a>
            </div>
          </div>
        </div>
        <div className={styles.trustWidget} id="trustindex-eligibility"></div>
      </div>
    </section>
  );
}
