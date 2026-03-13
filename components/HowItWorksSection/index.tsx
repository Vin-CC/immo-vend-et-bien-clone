'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './HowItWorksSection.module.css';

const steps = [
  {
    lottie: 'https://lottie.host/0a8acba0-14e6-42e4-a5e9-4b66ebe72f1d/yqyIaB5R7J.json',
    title: 'Éligibilité',
    text: 'Vérifiez en 1 clic si votre bien est éligible',
  },
  {
    lottie: 'https://lottie.host/398fb822-80c6-456e-b0aa-16db0e40e5c7/sR0EyLKKhx.json',
    title: 'Estimation offerte',
    text: 'Grâce à notre estimation innovante, découvrez la valeur réelle de votre bien',
  },
  {
    lottie: 'https://lottie.host/624aef38-a7c3-4371-892a-1c3be7c7fed6/bb6DWwEOlS.json',
    title: 'Déploiement de notre méthode',
    text: 'Notre solution innovante maximise la visibilité de votre bien',
  },
  {
    lottie: 'https://lottie.host/3f342f4f-2aba-421f-aeb9-dcc28f242b3d/pjLOURu7Zh.json',
    title: 'Négociation et vente du bien',
    text: 'Qualifier les visites, mener les négociations, conclure la vente au meilleur prix',
  },
  {
    lottie: 'https://lottie.host/b0cd9abb-0ad5-4a85-93da-a4f6edc7f92f/LDQNV5wFuK.json',
    title: 'Suivi & accompagnement administratif',
    text: 'Du premier contact au passage chez le notaire, nous gérons tout',
  },
  {
    lottie: 'https://lottie.host/f8b5b868-ef2c-4cb7-a722-d49a265d85b5/ViLARkuAgj.json',
    title: 'Souriez, c\'est vendu !',
    text: 'Et ouvrez la porte de vos nouveaux projets immobiliers…',
  },
];

function LottieStep({ url, index }: { url: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animation: any;
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          const lottie = (await import('lottie-web')).default;
          animation = lottie.loadAnimation({
            container: ref.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: url,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (animation) animation.destroy();
    };
  }, [url]);

  return <div ref={ref} className={styles.lottieStep}></div>;
}

function ArrowIcon({ visible }: { visible: boolean }) {
  return (
    <div className={`${styles.arrowWrapper} ${visible ? styles.visible : ''}`}>
      <svg className={styles.arrowSvg} viewBox="0 0 24 24" fill="none" stroke="#DE6539" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
}

export default function HowItWorksSection() {
  const [arrowsVisible, setArrowsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArrowsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.overlay}></div>
      <div className={styles.inner}>
        <div className={styles.rightCol}>
          <h2 className={styles.title}>Comment ça marche ?</h2>
          <p className={styles.subtitle}>Tout est pensé pour Vendre &amp; Bien !</p>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <div key={i}>
                <div className={styles.step}>
                  <LottieStep url={step.lottie} index={i} />
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepText}>{step.text}</p>
                  </div>
                </div>
                {i < steps.length - 1 && <ArrowIcon visible={arrowsVisible} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
