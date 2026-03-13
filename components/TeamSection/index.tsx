'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './TeamSection.module.css';

const leftAgents = [
  { photo: 'https://www.immovendetbien.com/wp-content/uploads/2025/09/VeroWEB22.png', name: 'Alessia' },
  { photo: 'https://www.immovendetbien.com/wp-content/uploads/2025/01/Amina-881x1024.jpeg', name: 'Amina' },
  { photo: 'https://www.immovendetbien.com/wp-content/uploads/2025/09/VeroWEB33.png', name: 'Sebastien' },
];

const rightAgents = [
  { photo: 'https://www.immovendetbien.com/wp-content/uploads/2024/07/VeroWEB.jpg', name: 'Véronique' },
  { photo: 'https://www.immovendetbien.com/wp-content/uploads/2025/09/VeroWEB22.png', name: 'Alessia' },
  { photo: 'https://www.immovendetbien.com/wp-content/uploads/2025/09/VeroWEB33.png', name: 'Sebastien' },
];

function AgentCard({ photo, name, delay = 0 }: { photo: string; name: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${styles.agentCard} ${visible ? styles.visible : ''}`}>
      <img src={photo} alt={name} className={styles.agentPhoto} />
      <div className={styles.agentName}>{name}</div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.agentCol}>
          {leftAgents.map((agent, i) => (
            <AgentCard key={agent.name + i} photo={agent.photo} name={agent.name} delay={i * 150} />
          ))}
        </div>

        <div className={styles.centerCol}>
          <img
            src="https://www.immovendetbien.com/wp-content/uploads/2024/07/logo-VendEtBien-horizontal-01-QUADRI-CMJN-ByLevel51222-1-e1753092930888.png"
            alt="Vend & Bien"
            className={styles.centerLogo}
          />
          <p className={styles.centerText}>
            Bien plus qu&apos;une agence, nous combinons <strong>expertise immobilière et innovation digitale</strong>, pour vous accompagner avec succès.
          </p>
          <a href="#header-form" className={styles.centerBtn}>
            Je vérifie l&apos;éligibilité de mon bien
          </a>
        </div>

        <div className={styles.rightCol}>
          {rightAgents.map((agent, i) => (
            <AgentCard key={agent.name + i + 'right'} photo={agent.photo} name={agent.name} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
