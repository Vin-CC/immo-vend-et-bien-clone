'use client';

import { useEffect } from 'react';

export default function TestimonialsSection() {
  useEffect(() => {
    const container = document.getElementById('trustindex-testimonials');
    if (!container) return;
    // Avoid loading twice
    if (container.querySelector('script')) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?71afdad303093508a086ca123cd';
    script.defer = true;
    script.async = true;
    container.appendChild(script);
  }, []);

  return (
    <section className="bg-(--color-orange) py-15 md:py-25 text-center">
      <div className="max-w-285 mx-auto px-5">
        <h2 className="font-[arista-pro,Roboto,sans-serif] text-[26px] md:text-[36px] text-white mt-0 mb-4">
          Nos clients t&eacute;moignent !
        </h2>
        <p className="font-[effra,Roboto,sans-serif] text-[17px] md:text-[20px] text-white mb-10">
          98% de nos clients satisfaits nous recommandent &agrave; leurs proches
        </p>
        <div className="mb-10" id="trustindex-testimonials"></div>
        <a
          href="#header-form"
          className="inline-block bg-white text-(--color-orange) border-2 border-white px-7 py-3.5 font-[effra,Roboto,sans-serif] text-base font-bold cursor-pointer rounded-sm no-underline transition-opacity duration-200 ease-in-out hover:opacity-90 hover:text-(--color-orange) hover:no-underline"
        >
          Je v&eacute;rifie l&apos;&eacute;ligibilit&eacute; de mon bien
        </a>
      </div>
    </section>
  );
}
