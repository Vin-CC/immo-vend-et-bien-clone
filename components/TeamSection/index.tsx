'use client';

import { useRef, useState } from 'react';

export default function TeamSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section className="bg-white py-15 md:py-20 text-center">
      <div className="max-w-[760px] mx-auto px-5 flex flex-col items-center gap-8">
        {/* Logo + texte agence */}
        <img
          src="https://www.immovendetbien.com/wp-content/uploads/2024/07/logo-VendEtBien-horizontal-01-QUADRI-CMJN-ByLevel51222-1-e1753092930888.png"
          alt="Vend & Bien"
          className="max-w-[280px] h-auto"
        />
        <p className="font-[effra,Roboto,sans-serif] text-4 md:text-[18px] text-(--color-dark) leading-[1.6] max-w-140 m-0">
          Bien plus qu&apos;une agence, nous combinons <strong>expertise immobilière et innovation digitale</strong>, pour vous accompagner avec succès.
        </p>

        {/* Vidéo / bouton découvrir */}
        <div
          className="relative w-full max-w-[640px] cursor-pointer rounded-[10px] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.15)]"
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

        {/* Social proof : avatars + texte */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex">
            {[
              'https://www.immovendetbien.com/wp-content/uploads/2025/01/Amina-881x1024.jpeg',
              'https://www.immovendetbien.com/wp-content/uploads/2024/07/VeroWEB.jpg',
              'https://www.immovendetbien.com/wp-content/uploads/2025/09/VeroWEB33.png',
              'https://www.immovendetbien.com/wp-content/uploads/2025/09/VeroWEB22.png',
              'https://www.immovendetbien.com/wp-content/uploads/2025/08/Maeve-4gg-12-768x1024.png',
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className={`w-12 h-12 rounded-full object-cover border-[3px] border-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] ${i === 0 ? 'ml-0' : '-ml-3'}`}
              />
            ))}
          </div>
          <p className="font-[effra,Roboto,sans-serif] text-[15px] text-(--color-dark) m-0">
            Déjà <strong>+200 personnes</strong> ont vendu leurs biens avec Vend&amp;Bien
          </p>
        </div>

        <a
          href="#header-form"
          className="bg-(--color-orange) text-white px-7 py-3.5 font-[effra,Roboto,sans-serif] text-4 font-bold rounded-sm no-underline inline-block transition-opacity duration-200 hover:opacity-90 hover:text-white hover:no-underline"
        >
          Je vérifie l&apos;éligibilité de mon bien
        </a>
      </div>
    </section>
  );
}
