'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Link from 'next/link';

const slides = [   
  {
    image: 'p/images/ads/Ad1.jpg',
    title: 'Quality Healthcare Products',
    description: 'Get 20% off on all health supplements'
  },
  {
    image: '/images/ads/eye-for-ebony-UzomZB3cz-I-unsplash.jpg',
    title: 'Fast Medicine Delivery',
    description: 'Free delivery on orders above Ksh 2,000'
  },
  {
    image: '/images/ads/janay-peters-8YDaC0abIEs-unsplash.jpg',
    title: 'Professional Healthcare',
    description: 'Consult with certified pharmacists'
  },
  {
    image: '/images/ads/alex-starnes-tbYPDBChsZU-unsplash.jpg',
    title: 'Weekly Specials',
    description: 'Save big on featured products'
  },

];

export default function PrescriptionCarousel() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    });
  }, [controls]);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        className="hero-carousel"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[600px] w-full">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center max-w-lg mx-auto"
                >
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-2xl">
                    {slide.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href="/contact">Contact Us</Link>
    </div>
  );
} 