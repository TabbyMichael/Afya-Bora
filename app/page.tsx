'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, TrendingUp, Award, Clock, Truck } from 'lucide-react';
import PrescriptionCarousel from './componentss/prescription carousel/PrescriptionCarousel';

// Define the Product type
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  prescription_required: boolean;
  brand: string;
  packSize: string;
};

const featuredProducts = [
  {
    id: '1',
    name: 'Panadol Extra Tablets',
    price: 250,
    image: '/images/products/Panadol-Extra-20s.avif',
    rating: 4.5,
    prescription_required: false,
    brand: 'GSK',
    packSize: '24 tablets'
  },
  {
    id: '2',
    name: 'Centrum Advance Multivitamin',
    price: 1850,
    image: '/images/products/Centrum5054563189646-1-png.webp',
    rating: 4.8,
    prescription_required: false,
    brand: 'Centrum',
    packSize: '60 tablets'
  },
  {
    id: '3',
    name: 'Omron Blood Pressure Monitor',
    price: 6500,
    image: '/images/products/bp monitor61DCGvLyCsL.jpg',
    rating: 4.7,
    prescription_required: false,
    brand: 'Omron',
    packSize: '1 unit'
  },
  {
    id: '4',
    name: 'Glucometer Kit',
    price: 3200,
    image: '/images/products/glucometer-machine-600x600.jpg',
    rating: 4.6,
    prescription_required: false,
    brand: 'Accu-Check',
    packSize: 'Kit with 10 strips'
  },
  {
    id: '5',
    name: 'Vitamin D3 Supplements',
    price: 950,
    image: '/images/products/vitamin-d..webp',
    rating: 4.4,
    prescription_required: false,
    brand: 'HealthKart',
    packSize: '60 capsules'
  },
  {
    id: '6',
    name: 'N95 Face Masks',
    price: 750,
    image: '/images/products/n95-product-jpg.avif',
    rating: 4.3,
    prescription_required: false,
    brand: '3M',
    packSize: 'Pack of 10'
  },
  {
    id: '7',
    name: 'Digital Thermometer',
    price: 450,
    image: '/images/products/610lBxabhTL  thermometer.jpg',
    rating: 4.5,
    prescription_required: false,
    brand: 'Dr. Morepen',
    packSize: '1 unit'
  },
  {
    id: '8',
    name: 'Omega 3 Fish Oil',
    price: 1200,
    image: '/images/products/Now-Foods-Omega-3-.webp',
    rating: 4.6,
    prescription_required: false,
    brand: 'Seven Seas',
    packSize: '30 capsules'
  },
  {
    id: '9',
    name: 'First Aid Kit',
    price: 1500,
    image: '/images/products/2231716_first-aid.jpg',
    rating: 4.7,
    prescription_required: false,
    brand: 'SafeKit',
    packSize: 'Complete kit'
  },
  {
    id: '10',
    name: 'Calcium + Vitamin D3',
    price: 850,
    image: '/images/products/Calcium + Vitamin D3.webp',
    rating: 4.4,
    prescription_required: false,
    brand: 'Shelcal',
    packSize: '30 tablets'
  },
  {
    id: '11',
    name: 'Hand Sanitizer',
    price: 250,
    image: '/images/products/51Fd4ZT0weL._SS400_sanitizer.jpg',
    rating: 4.3,
    prescription_required: false,
    brand: 'Dettol',
    packSize: '500ml'
  },
  {
    id: '12',
    name: 'Protein Powder',
    price: 2500,
    image: '/images/products/Protein Powder.jpg',
    rating: 4.8,
    prescription_required: false,
    brand: 'Optimum Nutrition',
    packSize: '1kg'
  },
  {
    id: '13',
    name: 'Nebulizer Machine',
    price: 3500,
    image: '/images/products/NEC801 nebulizer.jpg',
    rating: 4.6,
    prescription_required: false,
    brand: 'Philips',
    packSize: '1 unit'
  },
  {
    id: '14',
    name: 'Biotin Supplements',
    price: 750,
    image: '/images/products/images   protein.jpg',
    rating: 4.5,
    prescription_required: false,
    brand: 'HealthVit',
    packSize: '60 tablets'
  },
  {
    id: '15',
    name: 'Pulse Oximeter',
    price: 1800,
    image: '/images/products/Pulse Oximeter.jpg',
    rating: 4.7,
    prescription_required: false,
    brand: 'Dr. Trust',
    packSize: '1 unit'
  },
  {
    id: '16',
    name: 'Collagen Supplements',
    price: 2200,
    image: '/images/products/Collagen Supplements.png',
    rating: 4.6,
    prescription_required: false,
    brand: 'Healthy Origins',
    packSize: '30 sachets'
  },
  {
    id: '17',
    name: 'Zinc + Vitamin C',
    price: 550,
    image: '/images/products/Zinc + Vitamin C.avif',
    rating: 4.4,
    prescription_required: false,
    brand: 'HealthViva',
    packSize: '60 tablets'
  },
  {
    id: '18',
    name: 'Digital Weight Scale',
    price: 1900,
    image: '/images/products/Digital Weight Scale.png',
    rating: 4.5,
    prescription_required: false,
    brand: 'Omron',
    packSize: '1 unit'
  },
  {
    id: '19',
    name: 'Magnesium Supplements',
    price: 850,
    image: '/images/products/Magnesium Supplements.webp',
    rating: 4.3,
    prescription_required: false,
    brand: 'Now Foods',
    packSize: '90 tablets'
  },
  {
    id: '20',
    name: 'Hot Water Bottle',
    price: 600,
    image: '/images/products/Sahyog.webp',
    rating: 4.4,
    prescription_required: false,
    brand: 'Sahyog',
    packSize: '2L capacity'
  }
];

const categories = [
  {
    id: '1',
    name: 'Prescription',
    image: '/images/products/prescription.webp',
    description: 'Upload your prescription and get your medicines delivered'
  },
  // Add more categories...
];

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Prescription Carousel */}
      <PrescriptionCarousel />

      {/* Features */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Genuine Products', desc: '100% Authentic Items' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Across Kenya' },
              { icon: TrendingUp, title: 'Best Prices', desc: 'Guaranteed Savings' },
              { icon: Clock, title: '24/7 Support', desc: 'Always Here to Help' }
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <feature.icon className="h-12 w-12 text-[#40E0D0]" />
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-black">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-lg shadow-md"
            >
              <div className="relative h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-black">
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-sm text-gray-200">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-black">Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between">
              <Link href={`/product/${product.id}`}>
                <div>
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-4 flex-grow">
                    <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{product.packSize}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-[#40E0D0]">KSh {product.price}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-[#40E0D0] text-white py-2 hover:bg-[#36b0a0] mt-auto"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
