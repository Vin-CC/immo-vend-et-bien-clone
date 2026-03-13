'use client';

import { useState } from 'react';
import styles from './FAQSection.module.css';

const faqs = [
  {
    q: 'Comment garantissez-vous de vendre mon bien au meilleur prix ?',
    a: 'Nous utilisons une approche d\'évaluation de votre bien en 3 phases : (Structurel, Marché et Concurrentielle). Cette méthode rigoureuse nous permet de fixer un prix juste, attractif pour les acquéreurs tout en maximisant votre gain net.',
  },
  {
    q: 'Quels services sont inclus dans votre gestion de la vente ?',
    a: 'Notre service couvre tous les aspects de la vente : annonce et photos professionnelles, stratégie digitale multi-canaux, qualification des acquéreurs, organisation des visites, négociation, accompagnement jusqu\'à la signature chez le notaire.',
  },
  {
    q: 'Comment votre stratégie digitale améliore-t-elle les chances de vendre mon bien ?',
    a: 'Nous optimisons la visibilité de votre bien sur toutes les plateformes immobilières et réseaux sociaux. Notre approche data-driven permet d\'atteindre les acquéreurs qualifiés plus rapidement et plus efficacement qu\'une agence traditionnelle.',
  },
  {
    q: 'Puis-je retirer mon bien de la vente ?',
    a: 'Absolument… Vous avez toujours la maîtrise et la possibilité de retirer votre bien à tout moment. Notre relation est fondée sur la confiance et la transparence.',
  },
  {
    q: 'Que se passe-t-il si mon bien n\'est pas vendu dans les 30 jours ?',
    a: 'Si votre bien n\'est pas vendu dans les 30 jours au prix convenu, nous allons jusqu\'à offrir l\'intégralité de nos honoraires. C\'est notre engagement fort envers vous.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Vous avez des questions ?</h2>
          <p className={styles.subtitle}>Nous avons les réponses</p>
        </div>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.item}>
              <button className={styles.question} onClick={() => toggle(i)}>
                <span>{faq.q}</span>
                <span className={styles.icon}>{openIndex === i ? '−' : '+'}</span>
              </button>
              <div className={`${styles.answer} ${openIndex === i ? styles.open : ''}`}>
                <p className={styles.answerText}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
