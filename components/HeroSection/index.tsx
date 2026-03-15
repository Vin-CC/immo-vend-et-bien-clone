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
          Nous vendons votre bien<br />
          <span>en 30 jours</span> et <span>au prix convenu</span>
        </h1>
        <p className={styles.subtitle}>
          Sinon jusqu&apos;à <strong>100% des honoraires offerts</strong>
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
