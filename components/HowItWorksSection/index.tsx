'use client';

import { useEffect, useRef, useState } from 'react';

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

  return <div ref={ref} className="w-15 h-15 shrink-0"></div>;
}

function ArrowIcon({ visible }: { visible: boolean }) {
  return (
    <div
      className={`flex justify-center py-1 ${
        visible ? 'animate-[fadeInDownArrow_0.6s_ease_forwards]' : 'opacity-0'
      }`}
    >
      <svg
        className="w-6 h-6 text-(--color-orange)"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#DE6539"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
    <section
      className="relative min-h-150 py-15 md:py-25 bg-white overflow-hidden"
      ref={sectionRef}
    >
      <img
        src="https://www.immovendetbien.com/wp-content/uploads/2024/05/trouver_un_conceiller_1.jpg"
        alt=""
        className="absolute top-0 left-0 w-[45%] h-full object-cover object-center block"
        aria-hidden="true"
      />
      <div className="relative z-1 max-w-285 mx-auto px-5 flex justify-center lg:justify-end">
        <div className="w-full lg:w-[80%] xl:w-[55%] bg-white p-[28px_16px] md:p-12 rounded-lg">
          <h2 className="font-['arista-pro','Roboto',sans-serif] text-[26px] md:text-[36px] text-(--color-dark) m-0 mb-2">
            Comment ça marche ?
          </h2>
          <p className="font-['effra','Roboto',sans-serif] text-[20px] text-(--color-gray) mb-8">
            Tout est pensé pour Vendre &amp; Bien !
          </p>
          <div className="flex flex-col gap-0.5">
            {steps.map((step, i) => (
              <div key={i}>
                <div className="bg-white p-[20px_24px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] rounded-lg flex items-center gap-4">
                  <LottieStep url={step.lottie} index={i} />
                  <div className="flex-1">
                    <h3 className="font-['arista-pro','Roboto',sans-serif] text-[20px] text-(--color-dark) m-0 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="font-['effra','Roboto',sans-serif] text-[15px] text-(--color-gray) m-0">
                      {step.text}
                    </p>
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
