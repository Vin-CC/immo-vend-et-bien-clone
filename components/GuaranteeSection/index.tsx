'use client';

import { useEffect, useRef } from 'react';
import styles from './GuaranteeSection.module.css';

export default function GuaranteeSection() {
  const lottieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animation: any;
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && lottieRef.current) {
          const lottie = (await import('lottie-web')).default;
          animation = lottie.loadAnimation({
            container: lottieRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://lottie.host/89e0d551-f51b-4e3c-b10d-b183d96d6c7f/PKada3ibfP.json',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (lottieRef.current) observer.observe(lottieRef.current);
    return () => {
      observer.disconnect();
      if (animation) animation.destroy();
    };
  }, []);

  return (
    <section className={styles.section}>
      <img
        src="https://www.immovendetbien.com/wp-content/uploads/2025/08/Maeve-4gg-12-768x1024.png"
        alt=""
        className={styles.decoLeft}
        aria-hidden="true"
      />
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Bénéficiez de notre garantie vendeur à 30 jours, au meilleur prix
        </h2>
        <div className={styles.lottieWrapper} ref={lottieRef}></div>
        <a href="#header-form" className={styles.btn}>
          Je vérifie l&apos;éligibilité de mon bien
        </a>
      </div>
      <img
        src="https://www.immovendetbien.com/wp-content/uploads/2024/05/Amina-12-768x1024.png"
        alt=""
        className={styles.decoRight}
        aria-hidden="true"
      />
    </section>
  );
}
