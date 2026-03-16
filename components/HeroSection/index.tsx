'use client';

import { useEffect } from 'react';

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
    <section
      className="relative z-[1] min-h-[80vh] bg-cover bg-center px-5 pt-[120px] pb-[60px] md:pt-[180px] md:pb-[100px] overflow-hidden text-center"
      style={{ backgroundImage: "url('https://www.immovendetbien.com/wp-content/uploads/2024/05/Vend-bien.jpg')" }}
      id="header-form"
    >
      <div className="absolute inset-0 bg-white/82 z-0"></div>
      <div className="relative z-[1] max-w-[800px] mx-auto flex flex-col items-center gap-4">
        <div className="font-[effra,Roboto,sans-serif] text-[18px] md:text-[28px] uppercase bg-(--color-orange) text-white inline-block px-[18px] py-[6px] animate-fadeInDownSmall">
          Reims &amp; Épernay
        </div>
        <h1 className="font-[arista-pro,Roboto,sans-serif] text-[30px] md:text-[48px] text-(--color-dark) m-0 leading-[1.2]">
          Nous vendons votre bien<br />
          <span className="text-(--color-orange)">en 30 jours</span> et <span className="text-(--color-orange)">au prix convenu</span>
        </h1>
        <p className="font-[effra,Roboto,sans-serif] text-[16px] md:text-[20px] text-(--color-dark) m-0">
          Sinon jusqu&apos;à <strong>100% des honoraires offerts</strong>
        </p>
        <div className="w-full max-w-[700px] bg-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden mt-2">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/s2V6VyjwDx9jjE7oQLrH"
            data-height="1237"
            title="Formulaire de contact"
            className="w-full h-[1237px] border-none block"
          />
        </div>
      </div>
    </section>
  );
}
