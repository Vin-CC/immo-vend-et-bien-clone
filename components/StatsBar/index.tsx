'use client';

import { useEffect, useRef, useState } from 'react';

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
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
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
    <div className="text-center flex-1 min-w-30 md:min-w-40">
      <span className="font-[arista-pro,Roboto,sans-serif] text-[32px] text-(--color-dark) block leading-none uppercase">
        {value}{stat.suffix}
      </span>
      <span className="font-[effra,Roboto,sans-serif] text-[28px] font-bold text-(--color-orange) mt-1.5 block">
        {stat.label}
      </span>
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
    <section className="relative z-10 -mt-10 md:-mt-20 px-5 bg-transparent" ref={ref}>
      <div className="max-w-[1140px] mx-auto bg-white shadow-[0px_0px_20px_-4px_rgba(0,0,0,0.155)] px-4 py-6 md:px-5 md:py-9 flex justify-around items-center gap-4 md:gap-5 flex-wrap">
        {stats.map((stat, i) => (
          <>
            <StatCounter key={stat.label} stat={stat} started={started} />
            {i < stats.length - 1 &&
              <div
                key={`divider-${i}`}
                className="hidden md:block w-0.5 h-15 bg-black/10"
              ></div>
            }
          </>
        ))}
      </div>
    </section>
  );
}
