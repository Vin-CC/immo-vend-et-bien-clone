'use client';

import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const container = document.getElementById('trustindex-navbar');
    if (!container) return;
    // Avoid loading twice
    if (container.querySelector('script')) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?ba912c75057c420761467bbcd77';
    script.defer = true;
    script.async = true;
    container.appendChild(script);
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-999 px-5 py-4 flex items-center justify-center md:px-10 md:py-5 md:justify-between">
      <div>
        <a href="#">
          <img
            src="https://www.immovendetbien.com/wp-content/uploads/2024/07/logo-VendEtBien-horizontal-01-QUADRI-CMJN-ByLevel51222-1-e1753092930888.png"
            alt="Vend & Bien"
            className="max-w-55 md:max-w-87.5 w-full h-auto"
          />
        </a>
      </div>
      <div className="hidden md:block" id="trustindex-navbar"></div>
    </nav>
  );
}
