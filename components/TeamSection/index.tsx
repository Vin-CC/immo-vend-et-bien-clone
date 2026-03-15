'use client';

import { useRef, useState } from 'react';
import styles from './TeamSection.module.css';

const agents = [
  { photo: 'https://www.immovendetbien.com/wp-content/uploads/2025/01/Amina-881x1024.jpeg', name: 'Amina' },
  { photo: 'https://www.immovendetbien.com/wp-content/uploads/2025/09/VeroWEB22.png', name: 'Alessia' },
  { photo: 'https://www.immovendetbien.com/wp-content/uploads/2024/07/VeroWEB.jpg', name: 'Véronique' },
  { photo: 'https://www.immovendetbien.com/wp-content/uploads/2025/09/VeroWEB33.png', name: 'Sébastien' },
  { photo: 'https://www.immovendetbien.com/wp-content/uploads/2025/08/Maeve-4gg-12-768x1024.png', name: 'Maeve' },
];

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
        {/* Bouton découvrir / vidéo */}
        <div className={styles.videoWrap} onClick={handlePlay}>
          {!playing && (
            <>
              <img
                src="https://www.immovendetbien.com/wp-content/uploads/2025/09/cover-pitch-new-VBdd.png"
                alt="Découvrir Vend & Bien"
                className={styles.cover}
              />
              <div className={styles.playOverlay}>
                <div className={styles.playCircle}>
                  <svg viewBox="0 0 24 24" fill="white" width="32" height="32">
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

        {/* Portraits ronds */}
        <div className={styles.portraits}>
          {agents.map((agent) => (
            <div key={agent.name} className={styles.portrait}>
              <img src={agent.photo} alt={agent.name} className={styles.portraitImg} />
              <span className={styles.portraitName}>{agent.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
