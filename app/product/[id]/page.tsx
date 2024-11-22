'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, Truck, Shield, ArrowLeft, ArrowRight } from 'lucide-react';
import { featuredProducts, type Product } from '@/data/products';
import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';

// Components
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < Math.floor(rating)
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-2 text-black">{rating} out of 5</span>
    </div>
  );
};

export default function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Find the product based on the ID
  const product = featuredProducts.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-black">Product not found</p>
      </div>
    );
  }

  // Mock multiple product images
  const productImages = [
    product.image,
    '/images/products/alt-view-1.jpg',
    '/images/products/alt-view-2.jpg',
  ];

  const addToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  const buyNow = () => {
    console.log(`Buying ${quantity} of ${product.name}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-black">
          Home / Products / {product.name}
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="col-span-1">
            <div className="relative h-96 mb-4">
              <Image
                src={productImages[selectedImage]}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex space-x-4 overflow-x-auto">
              {productImages.map((img, index) => (
                <div
                  key={index}
                  className={`relative w-20 h-20 cursor-pointer border-2 ${
                    selectedImage === index ? 'border-[#40E0D0]' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="col-span-1">
            <h1 className="text-3xl font-bold mb-4 text-black">{product.name}</h1>
            <div className="mb-4">
              <StarRating rating={product.rating} />
            </div>
            <p className="text-2xl font-bold mb-6 text-black">
              KSh {product.price.toLocaleString()}
            </p>
            
            {/* Product Description */}
            <div className="mb-8">
              <p className="text-black text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Key Benefits */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-black">Key Benefits</h2>
              <ul className="list-disc pl-6 space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="text-black">{benefit}</li>
                ))}
              </ul>
            </div>

            {/* Usage Instructions */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-black">How to Use</h2>
              <p className="text-black">{product.usage}</p>
            </div>

            {/* Product Features */}
            {product.features && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-black">Features</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-black">{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Ingredients */}
            {product.ingredients && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-black">Ingredients</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-black">{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Warnings */}
            {product.warnings && (
              <div className="mb-8 bg-red-50 p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-4 text-red-700">Important Warnings</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {product.warnings.map((warning, index) => (
                    <li key={index} className="text-red-700">{warning}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Product Details */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-black">Product Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-black">Brand</p>
                  <p className="text-black">{product.brand}</p>
                </div>
                <div>
                  <p className="font-semibold text-black">Pack Size</p>
                  <p className="text-black">{product.packSize}</p>
                </div>
                <div>
                  <p className="font-semibold text-black">Prescription Required</p>
                  <p className="text-black">{product.prescription_required ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Buy Box */}
          <div className="col-span-1">
            <div className="border rounded-lg p-4 sticky top-4">
              <p className="text-3xl font-bold mb-4 text-black">
                KSh {product.price.toLocaleString()}
              </p>
              
              <div className="mb-4">
                <label htmlFor="quantity" className="block text-sm font-medium text-black mb-1">
                  Quantity
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="block w-full border border-gray-300 rounded-md p-2 text-black"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                <AddToCartButton product={product} quantity={quantity} />
                
                <button className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                  Buy Now
                </button>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center text-black">
                  <Truck className="w-5 h-5 text-[#40E0D0] mr-2" />
                  <span>Free Delivery</span>
                </div>
                <div className="flex items-center text-black">
                  <Shield className="w-5 h-5 text-[#40E0D0] mr-2" />
                  <span>Genuine Product Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <div className="border-b">
            <div className="flex space-x-8">
              {['description', 'details', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  className={`py-2 px-4 border-b-2 ${
                    activeTab === tab
                      ? 'border-[#40E0D0] text-[#40E0D0]'
                      : 'border-transparent text-black'
                  } capitalize`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="py-6">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-black">About this item</h3>
                <p className="text-black">
                  This premium quality {product.name} from {product.brand} is designed to meet your healthcare needs. 
                  Each {product.packSize} is manufactured under strict quality control standards to ensure safety and efficacy.
                </p>
              </div>
            )}
            {activeTab === 'details' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4 text-black">Product Details</h3>
                <div className="grid grid-cols-2 gap-4 text-black">
                  <div>
                    <span className="font-semibold">Brand:</span> {product.brand}
                  </div>
                  <div>
                    <span className="font-semibold">Pack Size:</span> {product.packSize}
                  </div>
                  <div>
                    <span className="font-semibold">Prescription Required:</span>{' '}
                    {product.prescription_required ? 'Yes' : 'No'}
                  </div>
                  <div>
                    <span className="font-semibold">Storage:</span> Store in a cool, dry place
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-black">Customer Reviews</h3>
                <div className="flex items-center mb-6">
                  <StarRating rating={product.rating} />
                  <span className="ml-4 text-black">Based on 150 reviews</span>
                </div>
                {/* Mock reviews */}
                <div className="space-y-6">
                  {[
                    {
                      name: 'John D.',
                      rating: 5,
                      comment: 'Excellent product, fast delivery!',
                      date: '2 days ago',
                    },
                    {
                      name: 'Sarah M.',
                      rating: 4,
                      comment: 'Good quality, as described.',
                      date: '1 week ago',
                    },
                  ].map((review, index) => (
                    <div key={index} className="border-b pb-4">
                      <div className="flex items-center mb-2">
                        <StarRating rating={review.rating} />
                        <span className="ml-4 font-semibold text-black">{review.name}</span>
                      </div>
                      <p className="text-black mb-2">{review.comment}</p>
                      <span className="text-sm text-black">{review.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  href={`/product/${relatedProduct.id}`}
                  key={relatedProduct.id}
                  className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 mb-4">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 text-black">{relatedProduct.name}</h3>
                  <p className="text-lg font-bold text-black">
                    KSh {relatedProduct.price.toLocaleString()}
                  </p>
                  <StarRating rating={relatedProduct.rating} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
