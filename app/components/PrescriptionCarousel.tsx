'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { motion, useAnimation } from 'framer-motion';
import { Upload, Clock, CheckCircle, Shield, Truck, Phone } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    icon: Upload,
    title: "Upload Your Prescription",
    description: "Simply take a photo or upload your prescription",
    color: "bg-blue-500"
  },
  {
    icon: CheckCircle,
    title: "Quick Verification",
    description: "Our pharmacists verify your prescription instantly",
    color: "bg-green-500"
  },
  {
    icon: Shield,
    title: "100% Genuine Medicines",
    description: "All medicines are authentic and verified",
    color: "bg-purple-500"
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Quick processing of your prescription order",
    color: "bg-orange-500"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Get your medicines delivered to your doorstep",
    color: "bg-red-500"
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Our team is always here to help you",
    color: "bg-teal-500"
  }
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
    <div className="bg-gradient-to-r from-[#40E0D0]/10 to-[#40E0D0]/5 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upload Your Prescription
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get your prescribed medicines delivered to your doorstep in just a few simple steps
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          className="prescription-carousel"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 h-full"
              >
                <div className={`${slide.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <slide.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {slide.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {slide.description}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          className="text-center mt-12"
        >
          <button className="bg-[#40E0D0] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#36BDB0] transition-all transform hover:scale-105">
            Upload Prescription Now
          </button>
        </motion.div>
      </div>
    </div>
  );
} 