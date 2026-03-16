export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-12 px-5 text-center">
      <div className="max-w-285 mx-auto flex flex-col items-center gap-5">
        <img
          src="https://www.immovendetbien.com/wp-content/uploads/2024/07/logo-VendEtBien-horizontal-02-BLANC-ByLevel51-e1722354176898.png"
          alt="Vend & Bien"
          className="max-w-65 h-auto"
        />
        <p className="font-[effra,Roboto,sans-serif] text-[14px] text-white/80 m-0">Tous droits réservés – Vend&amp;Bien – 2025</p>
        <p className="font-[effra,Roboto,sans-serif] text-[14px] text-white/70 m-0">
          Site, stratégie, et publicités forgés dans la jungle de{' '}
          <a href="https://tribup.fr/" target="_blank" rel="noopener noreferrer" className="text-white underline">Trib&apos;up</a>
        </p>
        <nav className="flex gap-4 md:gap-6 flex-wrap justify-center">
          <a href="https://www.immovendetbien.com/honoraires/" target="_blank" rel="noopener noreferrer" className="font-[effra,Roboto,sans-serif] text-[14px] text-white/90 no-underline hover:underline hover:text-white">Honoraires</a>
          <a href="https://www.immovendetbien.com/mentions-legales/" target="_blank" rel="noopener noreferrer" className="font-[effra,Roboto,sans-serif] text-[14px] text-white/90 no-underline hover:underline hover:text-white">Mentions légales</a>
          <a href="https://www.immovendetbien.com/declaration-de-confidentialite-ue/" target="_blank" rel="noopener noreferrer" className="font-[effra,Roboto,sans-serif] text-[14px] text-white/90 no-underline hover:underline hover:text-white">Politique de confidentialité</a>
        </nav>
      </div>
    </footer>
  );
}
