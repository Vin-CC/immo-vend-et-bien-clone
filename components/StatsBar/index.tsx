'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StatsBar.module.css';

interface StatItem {
  label: string;
  target: number;
  suffix: string;
}

const stats: StatItem[] = [
  { label: 'Biens vendus', target: 188, suffix: '' },
  { label: 'Délai de vente mandat performance', target: 30, suffix: ' Jours' },
  { label: 'Satisfaction clients', target: 98, suffix: ' %' },
];

function useCounter(target: number, started: boolean) {
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!started) return;
    setValue(0);
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return value;
}

function StatCounter({ stat, started }: { stat: StatItem; started: boolean }) {
  const value = useCounter(stat.target, started);
  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>
        {value}{stat.suffix}
      </span>
      <span className={styles.statLabel}>{stat.label}</span>
    </div>
  );
}

export default function StatsBar() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.statsBar} ref={ref}>
      <div className={styles.inner}>
        {stats.map((stat, i) => (
          <>
            <StatCounter key={stat.label} stat={stat} started={started} />
            {i < stats.length - 1 && <div key={`divider-${i}`} className={styles.divider}></div>}
          </>
        ))}
      </div>
    </section>
  );
}
