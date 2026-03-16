'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BASE = 'https://www.immovendetbien.com/wp-content/uploads/';

const ALESSIA = BASE + '2024/05/Alassia-11-768x1024.jpeg';
const SEBASTIEN = BASE + '2024/05/Sebastien-2-889x1024.png';
const VERONIQUE = BASE + '2024/07/VeroWEB.jpg';

const slides = [
  { photo: BASE + '2024/06/Gael-2-1024x756.jpeg', city: 'Épernay', surface: 152, price: '315 000', agent: ALESSIA, agentName: 'Alessia', badge: 'Vendu en 15 jours' },
  { photo: BASE + '2024/06/Sylvain-3-1024x768.jpg', city: 'Vauciennes', surface: 136, price: '305 000', agent: SEBASTIEN, agentName: 'Sébastien', badge: 'Vendu en 3 semaines' },
  { photo: BASE + '2025/09/epernay490-1024x768.jpeg', city: 'Epernay', surface: 136, price: '490 000', agent: VERONIQUE, agentName: 'Véronique', badge: 'Vendu en 3 semaines' },
  { photo: BASE + '2025/09/epernay129-1024x768.jpg', city: 'Épernay', surface: 80, price: '129 000', agent: ALESSIA, agentName: 'Alessia', badge: 'Vendu en 3 semaines' },
  { photo: BASE + '2024/06/Francoise-1-1024x768.jpg', city: 'Épernay', surface: 213, price: '499 000', agent: SEBASTIEN, agentName: 'Sébastien', badge: 'Vendu en 15 jours' },
  { photo: BASE + '2025/09/reims219-1024x768.jpeg', city: 'Reims', surface: 90, price: '219 000', agent: VERONIQUE, agentName: 'Véronique', badge: 'Vendu en 3 semaines' },
  { photo: BASE + '2025/09/montbre610-1024x768.jpg', city: 'Montbré', surface: 160, price: '610 000', agent: ALESSIA, agentName: 'Alessia', badge: 'Vendu en 3 semaines' },
  { photo: BASE + '2025/09/reims349-1024x768.jpeg', city: 'Reims', surface: 120, price: '349 000', agent: VERONIQUE, agentName: 'Véronique', badge: 'Vendu en 3 semaines' },
  { photo: BASE + '2025/09/reims353-1024x683.jpg', city: 'Reims', surface: 93, price: '353 000', agent: ALESSIA, agentName: 'Alessia', badge: 'Vendu en 3 semaines' },
  { photo: BASE + '2025/09/bezannes319-1024x768.jpeg', city: 'Bezannes', surface: 104, price: '319 000', agent: VERONIQUE, agentName: 'Véronique', badge: 'Vendu en 3 semaines' },
];

export default function PropertiesCarousel() {
  return (
    <section className="bg-white py-15 md:py-25">
      <div className="max-w-285 mx-auto px-5 text-center">
        <h2 className="font-['arista-pro','Roboto',sans-serif] text-[24px] md:text-[36px] text-(--color-dark) m-0 mb-3">
          Nos derniers biens vendus en moins de 30 jours
        </h2>
        <p className="font-['effra','Roboto',sans-serif] text-[20px] text-(--color-gray) mb-12">
          Ajoutez-y votre bien sans plus tarder !
        </p>
        <div className="mb-10 properties-carousel">
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
              1025: { slidesPerView: 2 },
            }}
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col">
                  <div className="bg-(--color-orange) text-white font-['effra','Roboto',sans-serif] text-[14px] font-bold py-2 px-4 text-center">
                    {slide.badge}
                  </div>
                  <img
                    src={slide.photo}
                    alt={slide.city}
                    className="w-full h-55 object-cover block"
                  />
                  <div className="p-4 flex gap-3 font-['effra','Roboto',sans-serif] text-[15px] text-(--color-dark) flex-wrap justify-center">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256,0C166.035,0,91,72.47,91,165c0,35.202,10.578,66.592,30.879,96.006l121.494,189.58c5.894,9.216,19.372,9.198,25.254,0l122.021-190.225C410.512,232.28,421,199.307,421,165C421,74.019,346.981,0,256,0z M256,240c-41.353,0-75-33.647-75-75c0-41.353,33.647-75,75-75c41.353,0,75,33.647,75,75C331,206.353,297.353,240,256,240z"/><path d="M373.264,344.695l-75.531,118.087c-19.551,30.482-64.024,30.382-83.481,0.029l-75.654-118.085C72.034,360.116,31,388.309,31,422c0,58.462,115.928,90,225,90s225-31.538,225-90C481,388.285,439.909,360.077,373.264,344.695z"/></svg>
                      {slide.city}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m8 8.9c-.3 0-.5-.1-.7-.3l-5-4.9c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l5 4.9c.4.4.4 1 0 1.4-.2.3-.4.3-.7.3z"/><path d="m3 22c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5 5c-.2.2-.4.3-.7.3z"/><path d="m21 22c-.3 0-.5-.1-.7-.3l-4.9-5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4.9 5c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"/><path d="m16 8.9c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l5-4.9c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5 4.9c-.2.3-.4.3-.7.3z"/><path d="m21 8.5c-.6 0-1-.4-1-1v-3.5h-3.5c-.6 0-1-.4-1-1s.4-1 1-1h4.5c.6 0 1 .4 1 1v4.5c0 .6-.4 1-1 1z"/><path d="m21 22h-4.5c-.6 0-1-.4-1-1s.4-1 1-1h3.5v-3.5c0-.6.4-1 1-1s1 .4 1 1v4.5c0 .6-.4 1-1 1z"/><path d="m7.5 22h-4.5c-.6 0-1-.4-1-1v-4.5c0-.6.4-1 1-1s1 .4 1 1v3.5h3.5c.6 0 1 .4 1 1s-.4 1-1 1z"/><path d="m3 8.5c-.6 0-1-.4-1-1v-4.5c0-.6.4-1 1-1h4.5c.6 0 1 .4 1 1s-.4 1-1 1h-3.5v3.5c0 .6-.4 1-1 1z"/></svg>
                      {slide.surface} m²
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="m24 1.5a22.5 22.5 0 1 0 22.5 22.5 22.5 22.5 0 0 0 -22.5-22.5zm9.171 31.081a11.37 11.37 0 0 1 -18.171-4.693h-2.185a1.5 1.5 0 0 1 0-3h1.533c-.022-.288-.048-.588-.048-.888s.022-.6.045-.892h-1.53a1.5 1.5 0 0 1 0-3h2.185a11.391 11.391 0 0 1 10.682-7.491 11.267 11.267 0 0 1 7.03 2.43 1.5 1.5 0 1 1 -1.853 2.358 8.3 8.3 0 0 0 -5.177-1.788 8.387 8.387 0 0 0 -7.418 4.491h6.241a1.5 1.5 0 0 1 0 3h-7.153a8.466 8.466 0 0 0 -.052.892 8.6 8.6 0 0 0 .047.884h7.158a1.5 1.5 0 0 1 0 3h-6.24a8.376 8.376 0 0 0 12.935 2.437 1.5 1.5 0 0 1 1.973 2.26z"/></svg>
                      {slide.price}€
                    </span>
                  </div>
                  <div className="w-[80%] h-px bg-[#eee] mx-auto"></div>
                  <div className="p-4 flex items-center gap-3 justify-center">
                    <img
                      src={slide.agent}
                      alt={slide.agentName}
                      className="w-11 h-11 rounded-full object-cover border-2 border-(--color-orange)"
                    />
                    <span className="font-['effra','Roboto',sans-serif] text-[15px] text-(--color-dark) font-bold">
                      Vendu par {slide.agentName}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <a
          href="#header-form"
          className="bg-(--color-orange) text-white border-none py-3.5 px-7 font-['effra','Roboto',sans-serif] text-[16px] font-bold cursor-pointer rounded-sm no-underline inline-block transition-opacity duration-200 ease-in-out hover:opacity-90 hover:text-white hover:no-underline"
        >
          Je vérifie l&apos;éligibilité de mon bien
        </a>
      </div>
    </section>
  );
}
