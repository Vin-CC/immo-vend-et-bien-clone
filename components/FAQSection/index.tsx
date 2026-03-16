'use client';

import { useState } from 'react';

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
    <section className="bg-(--color-orange) px-5 py-15 md:px-25 md:py-25">
      <div className="max-w-285 mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-[arista-pro,Roboto,sans-serif] text-[26px] md:text-[36px] text-white mb-2">Vous avez des questions ?</h2>
          <p className="font-[effra,Roboto,sans-serif] text-[20px] text-white/85 m-0">Nous avons les réponses</p>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden">
              <button className="w-full text-left px-6 py-5 bg-transparent border-none cursor-pointer flex justify-between items-center gap-4 font-[effra,Roboto,sans-serif] text-[16px] md:text-[18px] text-(--color-dark) font-bold hover:bg-black/2" onClick={() => toggle(i)}>
                <span>{faq.q}</span>
                <span className="text-[24px] text-(--color-orange) font-bold shrink-0 leading-none">{openIndex === i ? '\u2212' : '+'}</span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openIndex === i ? '500px' : '0',
                  padding: openIndex === i ? '0 24px 20px' : '0 24px',
                }}
              >
                <p className="font-[effra,Roboto,sans-serif] text-[16px] text-(--color-gray) leading-[1.6] m-0">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
