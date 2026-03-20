'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };


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
      className="relative z-[1] min-h-[80vh] max-w-[min(100%, 1140px)] px-[200px] bg-cover bg-center 
      pt-[120px] pb-[60px] md:pt-[180px] md:pb-[100px] overflow-hidden text-center
      before:bg-white/82 before:absolute before:inset-0 before:z-[-1] before:content-['']
      "
      style={{ backgroundImage: "url('https://www.immovendetbien.com/wp-content/uploads/2024/05/Vend-bien.jpg')" }}
      id="header-form"
    >
      {/* min(100%, 1140px) */}
      <div className="relative z-[1] mx-auto flex flex-col items-center gap-4">
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
        <div className="w-full max-w-[900px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden mt-2">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/s2V6VyjwDx9jjE7oQLrH"
            data-height="1237"
            title="Formulaire de contact"
            className="w-full h-[1237px] border-none block"
          />
        </div>
      </div>

      {/* Vidéo / bouton découvrir */}
      <div
        className="mt-6 mx-auto relative w-full max-w-[min(100%, 1140px)] cursor-pointer overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.15)]"
        onClick={!playing ? handlePlay : undefined}
      >
        {!playing && (
          <>
            <img
              src="https://www.immovendetbien.com/wp-content/uploads/2025/09/cover-pitch-new-VBdd.png"
              alt="Découvrir Vend & Bien"
              className="w-full block"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/18">
              <div className="w-20 h-20 bg-(--color-orange) rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(222,101,57,0.5)] transition-transform duration-200 hover:scale-[1.08]">
                <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
              <span className="font-[effra,Roboto,sans-serif] text-[13px] font-bold text-white uppercase tracking-[1.5px]">
                Cliquez pour découvrir
              </span>
            </div>
          </>
        )}
        <video
          ref={videoRef}
          src="https://www.immovendetbien.com/wp-content/uploads/2025/09/Pitch-Vend-Bien.mp4"
          controls={playing}
          className={`w-full ${playing ? 'block' : 'hidden'}`}
        />
      </div>
    </section>
  );
}
