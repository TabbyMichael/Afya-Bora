'use client';

import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';

const products: {
  id: string;
  name: string;
  brand: string;
  price: number;
  packSize: string;
  rating: number;
  image: string;
}[] = [
  // Your existing product data
];

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p>Product not found</p>;
  }

  const addToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              src={product.image || '/images/fallback-image.jpg'}
              alt={product.name}
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg mb-4">Brand: {product.brand}</p>
            <p className="text-lg mb-4">Price: KSh {product.price}</p>
            <p className="text-lg mb-4">Pack Size: {product.packSize}</p>
            <p className="text-lg mb-4">Rating: {product.rating} / 5</p>
            <div className="flex items-center mb-4">
              <label className="mr-2">Quantity:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-16 px-2 py-1 border border-gray-300 rounded-md"
                min="1"
              />
            </div>
            <button
              onClick={addToCart}
              className="bg-[#40E0D0] text-white px-4 py-2 rounded-md hover:bg-[#36b0a0] mb-4"
            >
              Add to Cart
            </button>
            <button
              className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300"
            >
              Buy Now
            </button>
            <div className="mt-4">
              <p>Ships from: Afya Bora</p>
              <p>Sold by: Afya Bora</p>
              <p>Returnable until Jan 31, 2025</p>
              <p>Product support included</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">About this item</h2>
          <p className="text-gray-700 mb-4">
            {/* Add detailed product description here */}
            This is a placeholder for the product description. You can add more details about the product features, specifications, and benefits here.
          </p>
        </div>
      </div>
    </div>
  );
} 