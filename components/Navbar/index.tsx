'use client';

import { useEffect } from 'react';
import styles from './Navbar.module.css';

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
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#">
          <img
            src="https://www.immovendetbien.com/wp-content/uploads/2024/07/logo-VendEtBien-horizontal-01-QUADRI-CMJN-ByLevel51222-1-e1753092930888.png"
            alt="Vend & Bien"
          />
        </a>
      </div>
      <div className={styles.trustWidget} id="trustindex-navbar"></div>
    </nav>
  );
}
