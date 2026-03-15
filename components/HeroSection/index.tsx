'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // TrustIndex mobile
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?ba912c75057c420761467bbcd77';
    script.defer = true;
    script.async = true;
    const mobileContainer = document.getElementById('trustindex-hero-mobile');
    if (mobileContainer) mobileContainer.appendChild(script);

    // GHL form script
    const ghlScript = document.createElement('script');
    ghlScript.src = 'https://link.msgsndr.com/js/form_embed.js';
    document.body.appendChild(ghlScript);

    return () => {
      if (document.body.contains(ghlScript)) document.body.removeChild(ghlScript);
    };
  }, []);

  const handlePlayClick = () => {
    setVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className={styles.hero} id="header-form">
      <div className={styles.overlay}></div>
      <div className={styles.inner}>
        <div className={styles.leftCol}>
          <div className={styles.tag}>Reims &amp; Epernay</div>
          <h1 className={styles.h1}>
            Nous vendrons votre bien<br />
            <span>en 30 jours</span> et <span>au prix convenu</span>
          </h1>
          <p className={styles.subtitle}>
            Sinon jusqu&apos;à <strong>100% des honoraires offerts</strong>
          </p>
          <div className={styles.iframeWrapper}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/s2V6VyjwDx9jjE7oQLrH"
              data-height="1237"
              title="Formulaire de contact"
            />
          </div>
          <div className={styles.trustMobile} id="trustindex-hero-mobile"></div>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.videoWrapper} onClick={handlePlayClick}>
            {!videoPlaying && (
              <>
                <img
                  src="https://www.immovendetbien.com/wp-content/uploads/2025/09/cover-pitch-new-VBdd.png"
                  alt="Pitch Vend Bien"
                  className={styles.videoCover}
                />
                <div className={styles.videoOverlay}>
                  <div className={styles.playBtn}>
                    <div className={styles.playCircle}>
                      <svg className={styles.playIcon} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="5,3 19,12 5,21" fill="white" />
                      </svg>
                    </div>
                    <span className={styles.playLabel}>Cliquez pour découvrir</span>
                  </div>
                </div>
              </>
            )}
            <video
              ref={videoRef}
              src="https://www.immovendetbien.com/wp-content/uploads/2025/09/Pitch-Vend-Bien.mp4"
              controls={videoPlaying}
              className={`${styles.video} ${videoPlaying ? styles.active : ''}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
