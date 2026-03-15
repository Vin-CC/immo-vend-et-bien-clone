'use client';

import { useEffect } from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  useEffect(() => {
    const ghlScript = document.createElement('script');
    ghlScript.src = 'https://link.msgsndr.com/js/form_embed.js';
    document.body.appendChild(ghlScript);
    return () => {
      if (document.body.contains(ghlScript)) document.body.removeChild(ghlScript);
    };
  }, []);

  return (
    <section className={styles.hero} id="header-form">
      <div className={styles.overlay}></div>
      <div className={styles.inner}>
        <div className={styles.tag}>Reims &amp; Épernay</div>
        <h1 className={styles.h1}>
          Estimez et Vendez votre bien<br />
          <span>rapidement</span> et au meilleur prix
        </h1>
        <p className={styles.subtitle}>
          Évaluation offerte et <strong>sans engagement</strong>
        </p>
        <div className={styles.formCard}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/s2V6VyjwDx9jjE7oQLrH"
            data-height="1237"
            title="Formulaire de contact"
            className={styles.formIframe}
          />
        </div>
      </div>
    </section>
  );
}
