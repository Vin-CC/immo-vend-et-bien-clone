'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './PropertiesCarousel.module.css';

const BASE = 'https://www.immovendetbien.com/wp-content/uploads/';

const ALESSIA = BASE + '2024/05/Alassia-11-768x1024.jpeg';
const SEBASTIEN = BASE + '2024/05/Sebastien-2-889x1024.png';
const VERONIQUE = BASE + '2024/07/VeroWEB.jpg';

const slides = [
  { photo: BASE + '2024/06/Gael-2.jpeg', city: 'Épernay', surface: 152, price: '315 000', agent: ALESSIA, agentName: 'Alessia', badge: 'Vendu en 15 jours' },
  { photo: BASE + '2024/06/Sylvain-3.jpg', city: 'Vauciennes', surface: 136, price: '305 000', agent: SEBASTIEN, agentName: 'Sébastien', badge: 'Vendu en 3 semaines' },
  { photo: BASE + '2024/06/epernay490.jpeg', city: 'Epernay', surface: 136, price: '490 000', agent: VERONIQUE, agentName: 'Véronique', badge: 'Vendu en 3 semaines' },
  { photo: BASE + '2024/06/epernay129.jpg', city: 'Épernay', surface: 80, price: '129 000', agent: ALESSIA, agentName: 'Alessia', badge: 'Vendu en 3 semaines' },
  { photo: BASE + '2024/06/Francoise-1.jpg', city: 'Épernay', surface: 213, price: '499 000', agent: SEBASTIEN, agentName: 'Sébastien', badge: 'Vendu en 15 jours' },
  { photo: BASE + '2024/06/reims219.jpeg', city: 'Reims', surface: 90, price: '219 000', agent: VERONIQUE, agentName: 'Véronique', badge: 'Vendu en 3 semaines' },
  { photo: BASE + '2025/09/montbre610.jpg', city: 'Montbré', surface: 160, price: '610 000', agent: ALESSIA, agentName: 'Alessia', badge: 'Vendu en 3 semaines' },
  { photo: BASE + '2024/06/reims349.jpeg', city: 'Reims', surface: 120, price: '349 000', agent: VERONIQUE, agentName: 'Véronique', badge: 'Vendu en 3 semaines' },
  { photo: BASE + '2024/06/reims353.jpg', city: 'Reims', surface: 93, price: '353 000', agent: ALESSIA, agentName: 'Alessia', badge: 'Vendu en 3 semaines' },
  { photo: BASE + '2024/06/bezannes319.jpeg', city: 'Bezannes', surface: 104, price: '319 000', agent: VERONIQUE, agentName: 'Véronique', badge: 'Vendu en 3 semaines' },
];

export default function PropertiesCarousel() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Nos derniers biens vendus en moins de 30 jours</h2>
        <p className={styles.subtitle}>Ajoutez-y votre bien sans plus tarder !</p>
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1025: { slidesPerView: 3 },
            }}
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className={styles.slide}>
                  <div className={styles.badge}>{slide.badge}</div>
                  <img src={slide.photo} alt={slide.city} className={styles.slidePhoto} />
                  <div className={styles.slideInfo}>
                    <span className={styles.infoBit}>📍 {slide.city}</span>
                    <span className={styles.infoBit}>📐 {slide.surface} m²</span>
                    <span className={styles.infoBit}>💶 {slide.price}€</span>
                  </div>
                  <div className={styles.divider}></div>
                  <div className={styles.agentRow}>
                    <img src={slide.agent} alt={slide.agentName} className={styles.agentPhoto} />
                    <span className={styles.agentName}>Vendu par {slide.agentName}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <a href="#header-form" className={styles.btn}>
          Je vérifie l&apos;éligibilité de mon bien
        </a>
      </div>
    </section>
  );
}
