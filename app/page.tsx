'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, TrendingUp, Award, Clock, Truck } from 'lucide-react';
import PrescriptionCarousel from './componentss/prescription carousel/PrescriptionCarousel';
import { featuredProducts, type Product } from '@/data/products';
import AddToCartButton from '@/components/AddToCartButton';

const categories = [
  {
    id: '1',
    name: 'Prescription',
    image: '/images/products/prescription.webp',
    description: 'Upload your prescription and get your medicines delivered'
  },
  // Add more categories...
];

interface Feature {
  icon: any;
  title: string;
  desc: string;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < Math.floor(rating)
              ? 'text-yellow-400 fill-current'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

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
            ].map((feature: Feature, index) => (
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <Link href={`/product/${product.id}`}>
                <div className="relative h-48 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold mb-2 text-black">{product.name}</h3>
                <p className="text-lg font-bold text-black">
                  KSh {product.price.toLocaleString()}
                </p>
                <div className="mb-2">
                  <StarRating rating={product.rating} />
                </div>
                <div className="text-sm text-black">
                  <span className="font-semibold">Brand:</span> {product.brand}
                </div>
                <div className="text-sm text-black mb-4">
                  <span className="font-semibold">Pack Size:</span> {product.packSize}
                </div>
              </Link>
              <AddToCartButton 
                product={product}
                className="bg-[#40E0D0] text-white py-2 px-4 rounded-lg hover:bg-[#3CE0D0] transition-colors w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
