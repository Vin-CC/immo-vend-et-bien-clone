'use client';

import { useEffect, useRef } from 'react';

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
    <section className="bg-(--color-orange) py-15 md:pt-25 md:pb-45 relative overflow-x-clip">
      <div className="max-w-285 mx-auto px-5 text-center relative z-2">
        <h2 className="font-[arista-pro,Roboto,sans-serif] text-[26px] md:text-[36px] text-white mx-auto mb-10 mt-0 leading-[1.3] max-w-175">
          B&eacute;n&eacute;ficiez de notre garantie vendeur &agrave; 30 jours, au meilleur prix
        </h2>
        <div
          className="w-75 md:w-[450px] max-w-full mx-auto mb-10"
          ref={lottieRef}
        ></div>
        <a
          href="#header-form"
          className="bg-(--color-dark) text-white border-none px-8 py-4 font-[effra,Roboto,sans-serif] text-[18px] font-bold cursor-pointer rounded-sm no-underline inline-block transition-opacity duration-200 ease-in-out hover:opacity-90 hover:text-white hover:no-underline"
        >
          Je v&eacute;rifie l&apos;&eacute;ligibilit&eacute; de mon bien
        </a>
      </div>
    </section>
  );
}
