import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export default function ConfidentialitePage() {
  return (
    <main className="[&_a]:text-[#5D8D96] [&_a:hover]:text-[#4a7a82]">
      <PageHeader />

      <div className="max-w-300 mx-auto px-5 py-12 md:py-16 text-[#54595F] text-base leading-[1.8]">
        <h1 className="text-[36px] max-md:text-[28px] font-semibold text-[#58595B] mb-4 text-center leading-tight">
          Notre déclaration de confidentialité
        </h1>
        <p className="text-[13px] text-center mb-10">
          Cette déclaration de confidentialité a été mise à jour le 31 octobre 2024 et s&apos;applique aux citoyens et aux résidents permanents légaux de l&apos;Espace économique européen et de la Suisse.
        </p>

        <p className="mb-4">
          Dans cette déclaration de confidentialité, nous expliquons ce que nous faisons avec les données que nous obtenons à votre sujet via <a href="https://www.immovendetbien.com" className=''>https://www.immovendetbien.com</a>. Nous vous recommandons de lire attentivement cette déclaration. Lors de notre traitement, nous nous conformons aux exigences de la législation sur la confidentialité. Cela signifie, entre autres, que :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>nous indiquons clairement dans quelles finalités nous traitons les données personnelles. Nous faisons cela au moyen de cette déclaration de confidentialité ;</li>
          <li>nous visons à limiter notre recueil de données personnelles uniquement aux données personnelles nécessaires à des finalités légitimes;</li>
          <li>nous demandons d&apos;abord votre consentement explicite pour traiter vos données personnelles dans les cas nécessitant votre consentement;</li>
          <li>nous prenons des mesures de sécurité appropriées afin de protéger vos données personnelles, et nous en demandons autant des parties traitant des données personnelles pour nous;</li>
          <li>nous respectons votre droit de consulter, corriger ou supprimer vos données personnelles si vous en formulez la demande.</li>
        </ul>
        <p className="mb-8">
          Si vous avez des questions ou souhaitez savoir exactement quelles données nous conservons, veuillez nous contacter.
        </p>

        <hr className="border-t border-[#e5e5e5] my-8" />

        {/* Section 1 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">1. Finalité, données et durée de conservation</h2>
        <p className="mb-4">
          Nous pouvons collecter ou recevoir des informations personnelles pour un certain nombre de raisons liées à nos activités commerciales, notamment les suivantes : (cliquez pour déplier)
        </p>

        <details className="mb-4 group">
          <summary className="text-[16px] font-bold text-[#58595B] cursor-pointer select-none mb-3 list-none flex items-center gap-2">
            <span className="text-xs transition-transform group-open:rotate-90">&#9654;</span>
            1.1 Contact - Par téléphone, courrier, e-mail et/ou formulaires web
          </summary>
          <div className="pl-5 pb-4">
            <p className="mb-2">Dans cette finalité, nous utilisons les données suivantes :</p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Un prénom et un nom de famille</li>
              <li>Un domicile ou une autre adresse physique, incluant le nom d&apos;une rue et le nom d&apos;une ville ou d&apos;un village</li>
              <li>Une adresse e-mail</li>
              <li>Un numéro de téléphone</li>
            </ul>
            <p className="mb-2">La base sur laquelle nous pouvons traiter ces données est :</p>
            <p className="mb-3">
              <a href="https://cookiedatabase.org/legal-bases/#consent" target="_blank" rel="noopener noreferrer">Après avoir donné son consentement.</a>
            </p>
            <p className="font-bold mb-1">Durée de conservation</p>
            <p>Nous conservons ces données à la fin du service pendant le nombre de mois suivant : 13</p>
          </div>
        </details>

        <details className="mb-6 group">
          <summary className="text-[16px] font-bold text-[#58595B] cursor-pointer select-none mb-3 list-none flex items-center gap-2">
            <span className="text-xs transition-transform group-open:rotate-90">&#9654;</span>
            1.2 Compiler et analyser des statistiques pour l&apos;amélioration du site web.
          </summary>
          <div className="pl-5 pb-4">
            <p className="mb-2">Dans cette finalité, nous utilisons les données suivantes :</p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Un prénom et un nom de famille</li>
              <li>Un domicile ou une autre adresse physique, incluant le nom d&apos;une rue et le nom d&apos;une ville ou d&apos;un village</li>
              <li>Une adresse e-mail</li>
              <li>Un numéro de téléphone</li>
            </ul>
            <p className="mb-2">La base sur laquelle nous pouvons traiter ces données est :</p>
            <p className="mb-3">
              <a href="https://cookiedatabase.org/legal-bases/#consent" target="_blank" rel="noopener noreferrer">Après avoir donné son consentement.</a>
            </p>
            <p className="font-bold mb-1">Durée de conservation</p>
            <p>Nous conservons ces données à la fin du service pendant le nombre de mois suivant : 13</p>
          </div>
        </details>

        <hr className="border-t border-[#e5e5e5] my-8" />

        {/* Section 2 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">2. Partage avec d&apos;autres parties</h2>
        <p className="mb-4">
          Nous ne partageons ou divulguons ces données aux sous-traitants que dans les finalités suivantes :
        </p>
        <p className="mb-1"><strong>Sous-traitants</strong></p>
        <p className="mb-1">Nom:&nbsp;Trib&apos;up - Créateur du site, de la publicité et des pubs.</p>
        <p className="mb-1">Pays:&nbsp;</p>
        <p className="mb-6">Finalité :&nbsp;</p>

        <hr className="border-t border-[#e5e5e5] my-8" />

        {/* Section 3 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">3. Cookies</h2>
        <p className="mb-6">
          Notre site web utilise des cookies. Pour plus d&apos;informations sur les cookies, veuillez vous référer à notre{' '}
          <Link href="/politique-de-cookies-ue">Politique de cookies</Link>.
        </p>

        <hr className="border-t border-[#e5e5e5] my-8" />

        {/* Section 4 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">4. Pratiques de divulgation</h2>
        <p className="mb-4">
          Nous divulguons des informations personnelles si nous y sommes tenus par la loi ou par une ordonnance du tribunal, en réponse à un organisme d&apos;application de la loi, dans la mesure permise par d&apos;autres dispositions de la loi, pour fournir des informations, ou pour une enquête sur une question liée à la sécurité publique.
        </p>
        <p className="mb-6">
          Si notre site web ou notre organisation est repris, vendu ou impliqué dans une fusion ou une acquisition, vos données peuvent être divulguées à nos conseillers et à tout acheteur potentiel et seront transmises aux nouveaux propriétaires.
        </p>

        <hr className="border-t border-[#e5e5e5] my-8" />

        {/* Section 5 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">5. Sécurité</h2>
        <p className="mb-6">
          Nous nous engageons à la sécurité des données personnelles. Nous prenons les mesures de sécurité appropriées pour limiter les abus et l&apos;accès non autorisé aux données personnelles. Cela garantit que seules les personnes nécessaires ont accès à vos données, que l&apos;accès aux données est protégé et que nos mesures de sécurité sont régulièrement revues.
        </p>

        <hr className="border-t border-[#e5e5e5] my-8" />

        {/* Section 6 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">6. Sites web tierces parties</h2>
        <p className="mb-6">
          Cette déclaration de confidentialité ne s&apos;applique pas aux sites web de tierces parties connectés par des liens sur notre site web. Nous ne pouvons garantir que ces tierces parties gèrent vos données personnelles de manière fiable ou sécurisée. Nous vous recommandons de lire les déclarations de confidentialité de ces sites web avant de les utiliser.
        </p>

        <hr className="border-t border-[#e5e5e5] my-8" />

        {/* Section 7 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">7. Modifications apportées à cette déclaration de confidentialité</h2>
        <p className="mb-6">
          Nous nous réservons le droit de modifier la présente déclaration de confidentialité. Il est recommandé de consulter régulièrement cette déclaration de confidentialité afin de prendre connaissance de toute modification éventuelle. De plus, nous vous informerons activement dans la mesure du possible.
        </p>

        <hr className="border-t border-[#e5e5e5] my-8" />

        {/* Section 8 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">8. Accéder à vos données et les modifier</h2>
        <p className="mb-4">
          Si vous avez des questions ou souhaitez savoir quelles sont les données personnelles que nous avons à votre sujet, veuillez nous contacter. Vous pouvez nous contacter en utilisant les informations ci-dessous. Vous avez les droits suivants:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Vous avez le droit de savoir pourquoi vos données personnelles sont nécessaires, ce qui leur arrivera et combien de temps elles seront conservées.</li>
          <li>Droit d&apos;accès : vous avez le droit d&apos;accéder à vos données personnelles que nous connaissons.</li>
          <li>Droit de rectification : vous avez le droit à tout moment de compléter, corriger, faire supprimer ou bloquer vos données personnelles.</li>
          <li>Si vous nous donnez votre consentement pour le traitement de vos données, vous avez le droit de révoquer ce consentement et de faire supprimer vos données personnelles.</li>
          <li>Droit de transférer vos données : vous avez le droit de demander toutes vos données personnelles au responsable du traitement et de les transférer dans leur intégralité à un autre responsable du traitement.</li>
          <li>Droit d&apos;opposition : vous pouvez vous opposer au traitement de vos données. Nous obtempérerons, à moins que certaines raisons ne justifient ce traitement.</li>
        </ul>
        <p className="mb-6">
          Assurez-vous de toujours indiquer clairement qui vous êtes, afin que nous puissions être certains de ne pas modifier ni supprimer les données de la mauvaise personne.
        </p>

        <hr className="border-t border-[#e5e5e5] my-8" />

        {/* Section 9 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">9. Déposer une plainte</h2>
        <p className="mb-6">
          Si vous n&apos;êtes pas satisfait de la manière dont nous traitons (une réclamation concernant) le traitement de vos données personnelles, vous avez le droit de déposer une réclamation auprès de l&apos;autorité de protection des données.
        </p>

        <hr className="border-t border-[#e5e5e5] my-8" />

        {/* Section 10 */}
        <h2 className="text-[20px] font-bold text-[#58595B] mb-4">10. Coordonnées</h2>
        <p className="mb-1">MS ASSOCIES – HOME EPERNAY</p>
        <p className="mb-1">18 rue de Reims 51200 Epernay</p>
        <p className="mb-1">France</p>
        <p className="mb-1">Site web : <a href="https://www.immovendetbien.com">https://www.immovendetbien.com</a></p>
        <p className="mb-1">E-mail : contact@vendetbien.com</p>
        <p className="mb-6">Numéro de téléphone : 03 26 55 08 42</p>
      </div>

      <Footer />
    </main>
  );
}
