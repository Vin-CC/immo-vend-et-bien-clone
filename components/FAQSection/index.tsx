'use client';

import { useState } from 'react';
import styles from './FAQSection.module.css';

const faqs = [
  {
    q: 'Comment garantissez-vous de vendre mon bien au meilleur prix ?',
    a: 'Nous utilisons une approche d\'évaluation de votre bien en 3 phases : (Structurel, Marché et Concurentielle). Cette méthode permet de positionner votre bien pour au meilleur prix, dès le départ. De plus, notre stratégie digitale cible les acheteurs les plus susceptibles d\'être intéressés par votre bien, augmentant ainsi les chances d\'obtenir le meilleur prix.',
  },
  {
    q: 'Quels services sont inclus dans votre gestion de la vente ?',
    a: 'Notre service couvre tous les aspects de la vente, annonce et photos pensées pour sublimer votre bien et en révéler tous les atouts, brochure et un site web dédié à votre bien, suivi en temps réel du marché, qualification des visites, négociations, prise en charge administrative, certification financière des acheteurs… vous garantissant une vente sécurisée et sans souci.',
  },
  {
    q: 'Comment votre stratégie digitale améliore-t-elle les chances de vendre mon bien ?',
    a: 'Nous optimisons la visibilité de votre bien sur toutes les plateformes de diffusion : portails immobiliers, réseaux sociaux et sites spécialisés. Grâce à notre stratégie digitale ciblée nous captons un maximum d\'acquéreurs en mettant en valeur les atouts uniques de votre bien. Nous suivons en temps réel l\'évolution de l\'offre et de la demande en temps réel, ajustant la stratégie pour garantir une position optimale de votre bien.',
  },
  {
    q: 'Puis-je retirer mon bien de la vente ?',
    a: 'Absolument… Vous avez toujours la maîtrise et la possibilité de retirer votre bien à tout moment si vous l\'estimez. C\'est notre façon de garantir que notre service répond pleinement à vos attentes.',
  },
  {
    q: 'Que se passe-t-il si mon bien n\'est pas vendu dans les 30 jours ?',
    a: 'Si votre bien n\'est pas vendu dans les 30 jours au prix convenu, nous allons jusqu\'à offrir l\'intégralité de nos honoraires. Cela augmente votre prix net vendeur et reflète notre détermination à conclure la vente de votre bien dans les délais impartis. Conditions affiché en agence.',
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
