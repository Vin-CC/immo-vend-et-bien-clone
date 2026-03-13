'use client';

import { useEffect } from 'react';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  useEffect(() => {
    const container = document.getElementById('trustindex-testimonials');
    if (!container) return;
    // Avoid loading twice
    if (container.querySelector('script')) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?71afdad303093508a086ca123cd';
    script.defer = true;
    script.async = true;
    container.appendChild(script);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Nos clients témoignent !</h2>
        <p className={styles.subtitle}>98% de nos clients satisfaits nous recommandent à leurs proches</p>
        <div className={styles.trustWidget} id="trustindex-testimonials"></div>
        <a href="#header-form" className={styles.btn}>
          Je vérifie l&apos;éligibilité de mon bien
        </a>
      </div>
    </section>
  );
}
