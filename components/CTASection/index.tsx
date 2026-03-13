'use client';

import { useEffect, useRef } from 'react';
import styles from './CTASection.module.css';

export default function CTASection() {
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
            path: 'https://lottie.host/9486f40c-c601-4545-a71f-df0a82c3fcdd/7pg2tZa6dg.json',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
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
        src="https://www.immovendetbien.com/wp-content/uploads/2025/07/dd-889x1024.png"
        alt=""
        className={styles.decoLeft}
        aria-hidden="true"
      />
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Nous vendons votre bien dans <strong>les 30 prochains jours</strong>, au <strong>prix convenu.</strong>
        </h2>
        <p className={styles.subtitle}>
          Sinon, jusqu&apos;à <strong>100% des honoraires offerts</strong>.
        </p>
        <div className={styles.lottieWrapper} ref={lottieRef}></div>
        <a href="#header-form" className={styles.btn}>
          Je vérifie l&apos;éligibilité de mon bien
        </a>
      </div>
      <img
        src="https://www.immovendetbien.com/wp-content/uploads/2025/07/Sebastien-2dd-889x1024.png"
        alt=""
        className={styles.decoRight}
        aria-hidden="true"
      />
    </section>
  );
}
