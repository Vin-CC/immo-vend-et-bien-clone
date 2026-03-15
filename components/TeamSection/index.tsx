'use client';

import { useRef, useState, useEffect } from 'react';
import styles from './TeamSection.module.css';

export default function TeamSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Logo + texte agence */}
        <img
          src="https://www.immovendetbien.com/wp-content/uploads/2024/07/logo-VendEtBien-horizontal-01-QUADRI-CMJN-ByLevel51222-1-e1753092930888.png"
          alt="Vend & Bien"
          className={styles.logo}
        />
        <p className={styles.text}>
          Bien plus qu&apos;une agence, nous combinons <strong>expertise immobilière et innovation digitale</strong>, pour vous accompagner avec succès.
        </p>

        {/* Vidéo / bouton découvrir */}
        <div className={styles.videoWrap} onClick={!playing ? handlePlay : undefined}>
          {!playing && (
            <>
              <img
                src="https://www.immovendetbien.com/wp-content/uploads/2025/09/cover-pitch-new-VBdd.png"
                alt="Découvrir Vend & Bien"
                className={styles.cover}
              />
              <div className={styles.playOverlay}>
                <div className={styles.playCircle}>
                  <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
                <span className={styles.playLabel}>Cliquez pour découvrir</span>
              </div>
            </>
          )}
          <video
            ref={videoRef}
            src="https://www.immovendetbien.com/wp-content/uploads/2025/09/Pitch-Vend-Bien.mp4"
            controls={playing}
            className={`${styles.video} ${playing ? styles.active : ''}`}
          />
        </div>

        <a href="#header-form" className={styles.btn}>
          Je vérifie l&apos;éligibilité de mon bien
        </a>
      </div>
    </section>
  );
}
