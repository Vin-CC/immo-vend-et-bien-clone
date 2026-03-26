import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions légales - Vend & Bien',
  description: 'Mentions légales du site Vend & Bien.',
};

export default function MentionsLegalesPage() {
  return (
    <main className="[&_a]:text-[#5D8D96] [&_a:hover]:text-[#4a7a82]">
      <PageHeader />

      <div className="max-w-300 mx-auto px-5 py-12 md:py-16 text-[#54595F] text-base leading-[1.8]">
        <h1 className="text-[36px] max-md:text-[28px] font-semibold text-[#58595B] mb-10 text-center leading-tight">
          Nos mentions légales
        </h1>

        {/* Section 1 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">1 – Édition du site</h2>
        <p className="mb-4">
          En vertu de{' '}
          <a href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000801164#LEGIARTI000042038977" target="_blank" rel="noopener noreferrer">
            l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004
          </a>{' '}
          pour la confiance dans l&apos;économie numérique, il est précisé aux utilisateurs du site internet <strong>https://www.immovendetbien.com/</strong> l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi:
        </p>
        <p className="mb-4">
          <strong>Propriétaire du site : </strong>MS ASSOCIES – HOME EPERNAY – Contact : contact@vendetbien.com 03 26 55 08 42 – Adresse : 18 rue de Reims 51200 Epernay.
        </p>
        <p className="mb-4">
          <strong>Identification de l&apos;entreprise :</strong> SAS MS ASSOCIES – HOME EPERNAY au capital social de 10 000€ – SIREN : 843717927 – RCS ou RM : 84371792700019 – Adresse postale : 18 rue de Reims 51200 Epernay – <Link href="/declaration-de-confidentialite-ue">https://www.immovendetbien.com/declaration-de-confidentialite-ue/</Link>
        </p>
        <p className="mb-4">
          <strong>Directeur de la publication : </strong>– Contact : .
        </p>
        <p className="mb-4">
          <strong>Hébergeur :</strong> OVH SAS – 2 rue Kellermann – BP 80157 – 59053 Roubaix Cedex 1 – Téléphone : 1007
        </p>
        <p className="mb-4">
          <strong>Délégué à la protection des données : </strong>–
        </p>
        <p className="mb-6">
          <strong>Autres contributeurs :</strong>
        </p>

        <hr className="border-t border-[#e5e5e5] my-8" />

        {/* Section 2 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">2 – Propriété intellectuelle et contrefaçons.</h2>
        <p className="mb-4">
          <strong>MS ASSOCIES – HOME EPERNAY</strong> est propriétaire des droits de propriété intellectuelle et détient les droits d&apos;usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
        </p>
        <p className="mb-4">
          Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de <strong>MS ASSOCIES – HOME EPERNAY</strong>.
        </p>
        <p className="mb-6">
          Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles{' '}
          <a href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000032655082&cidTexte=LEGITEXT000006069414&dateTexte=20160605" target="_blank" rel="noopener noreferrer">
            L.335-2 et suivants du Code de Propriété Intellectuelle
          </a>.
        </p>

        <hr className="border-t border-[#e5e5e5] my-8" />

        {/* Section 3 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">3 – Limitations de responsabilité.</h2>
        <p className="mb-4">
          <strong>MS ASSOCIES – HOME EPERNAY</strong> ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site <strong>https://www.immovendetbien.com/</strong>.
        </p>
        <p className="mb-4">
          <strong>MS ASSOCIES – HOME EPERNAY</strong> décline toute responsabilité quant à l&apos;utilisation qui pourrait être faite des informations et contenus présents sur <strong>https://www.immovendetbien.com/</strong>.
        </p>
        <p className="mb-4">
          <strong>MS ASSOCIES – HOME EPERNAY</strong> s&apos;engage à sécuriser au mieux le site <strong>https://www.immovendetbien.com/</strong>, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.
        </p>
        <p className="mb-4">
          Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. <strong>MS ASSOCIES – HOME EPERNAY</strong> se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.
        </p>
        <p className="mb-6">
          Le cas échéant, <strong>MS ASSOCIES – HOME EPERNAY</strong> se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l&apos;utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).
        </p>

        <hr className="border-t border-[#e5e5e5] my-8" />

        {/* Section 4 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">4 – CNIL et gestion des données personnelles.</h2>
        <p className="mb-4">
          Conformément aux dispositions de{' '}
          <a href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000886460" target="_blank" rel="noopener noreferrer">
            la loi 78-17 du 6 janvier 1978 modifiée
          </a>, l&apos;utilisateur du site <strong>https://www.immovendetbien.com/</strong> dispose d&apos;un droit d&apos;accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données : – .
        </p>
        <p className="mb-6">
          Pour plus d&apos;informations sur la façon dont nous traitons vos données (type de données, finalité, destinataire…), lisez notre{' '}
          <Link href="/declaration-de-confidentialite-ue">
            <strong>https://www.immovendetbien.com/declaration-de-confidentialite-ue/</strong>
          </Link>.
        </p>

        <hr className="border-t border-[#e5e5e5] my-8" />

        {/* Section 5 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">5 – Liens hypertextes et cookies</h2>
        <p className="mb-4">
          Le site <strong>https://www.immovendetbien.com/</strong> contient des liens hypertextes vers d&apos;autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d&apos;autres sites vers <strong>https://www.immovendetbien.com/</strong>.
        </p>
        <p className="mb-4">
          La navigation sur le site <strong>https://www.immovendetbien.com/</strong> est susceptible de provoquer l&apos;installation de cookie(s) sur l&apos;ordinateur de l&apos;utilisateur.
        </p>
        <p className="mb-4">
          Un « cookie » est un fichier de petite taille qui enregistre des informations relatives à la navigation d&apos;un utilisateur sur un site. Les données ainsi obtenues permettent d&apos;obtenir des mesures de fréquentation, par exemple.
        </p>
        <p className="mb-4">
          Vous avez la possibilité <strong>d&apos;accepter ou de refuser les cookies</strong> en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.
        </p>
        <p className="mb-4">
          Les cookies sont enregistrés pour une durée maximale de 13 mois.
        </p>
        <p className="mb-6">
          Pour plus d&apos;informations sur la façon dont nous faisons usage des cookies, lisez notre{' '}
          <Link href="/declaration-de-confidentialite-ue">
            <strong>https://www.immovendetbien.com/declaration-de-confidentialite-ue/</strong>
          </Link>.
        </p>

        <hr className="border-t border-[#e5e5e5] my-8" />

        {/* Section 6 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">6 – Droit applicable et attribution de juridiction.</h2>
        <p className="mb-6">
          Tout litige en relation avec l&apos;utilisation du site <strong>https://www.immovendetbien.com/</strong> est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de .
        </p>

        <hr className="border-t border-[#e5e5e5] my-8" />

        {/* Section 7 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">7 – Garantie vendeur à 30 jours.</h2>
        <p className="mb-6">
          Le Prix de Vente Garanti de référence est défini à partir de l&apos;Estimation des comparables, calculée selon les caractéristiques du bien, le marché local et les biens comparables en cours de commercialisation. Dans le cadre d&apos;un mandat exclusif, si la vente n&apos;est pas réalisée dans les délais convenus et qu&apos;aucune offre écrite au Prix de Vente Garanti de référence n&apos;a été reçue, une remise de 5 % sur les honoraires forfaitaires sera appliquée pour chaque mois écoulé au-delà de ce délai. Ces remises sont cumulatives et peuvent aboutir à la gratuité totale des honoraires d&apos;agence.
        </p>
      </div>

      <Footer />
    </main>
  );
}
