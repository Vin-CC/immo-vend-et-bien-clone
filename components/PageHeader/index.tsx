import Link from "next/link";

export default function PageHeader() {
  return (
    <header className="bg-[#DE6539] py-6 px-5 flex items-center justify-center">
      <div className="max-w-285 mx-auto">
        <Link href="/">
          <img
            src="https://www.immovendetbien.com/wp-content/uploads/2024/07/logo-VendEtBien-horizontal-02-BLANC-ByLevel51-e1722354176898.png"
            alt="Vend & Bien"
            className="max-w-55 md:max-w-70 h-auto"
          />
        </Link>
      </div>
    </header>
  );
}
