import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Honoraires - Vend & Bien',
  description: 'Barème des honoraires de l\'agence Vend & Bien à Reims et Epernay.',
};

export default function HonorairesPage() {
  return (
    <main className="[&_a]:text-[#5D8D96] [&_a:hover]:text-[#4a7a82]">
      <PageHeader />

      <div className="max-w-300 mx-auto px-5 py-12 md:py-16 text-[#54595F] text-base leading-[1.8] text-center">
        <h1 className="text-[36px] max-md:text-[28px] font-semibold text-[#58595B] mb-1 leading-tight">
          Honoraires Agence Vend &amp; Bien
          <br />
          Reims - Epernay
        </h1>

        <p className="font-medium mt-8 mb-8">
          Applicables à partir du 01/04/2024
        </p>

        <p className="mb-2">
          Garage et parking 10% par unité.
        </p>
        <p className="mb-2">
          Honoraires exprimés en pourcentage TTC (TVA en vigueur 20%) à la charge du vendeur ou de l&apos;acquéreur selon le mandat (vente ou recherche).
        </p>
        <p className="mb-6">
          Vente de locaux à usage d&apos;habitation, locaux professionnels, commerciaux ou industriels, terrains à bâtir, garages.
        </p>

        <p className="font-bold mb-10">
          *Les prix affichés sont net hors frais de notaire, d&apos;enregistrement et de publicité foncière. En cas de délégation de mandat, les honoraires applicables sont ceux de l&apos;agence ayant reçu le mandat inital.
        </p>

        <p className="text-[13px] text-[#7A7A7A] leading-relaxed">
          SAS MS ASSOCIES – Capital : 10.0000 Euros – Siret : 84371792700019 – RCS 843717927 Reims – N° Carte Professionnelle : CPI 5102 2019 0000 39 685 – Caisse de garantie financière : GALIAN : 89 Rue de la Boétie 75008 Paris – Montant de la garantie financière : 120.000 Euros – Assurance RCP : 843717927
        </p>
      </div>

      <Footer />
    </main>
  );
}
