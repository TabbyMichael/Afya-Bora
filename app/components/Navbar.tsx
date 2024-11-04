'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Search, Menu, User, Phone, Heart } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-[#40E0D0] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <Phone className="h-4 w-4" />
            <span>Call us: 0800 AFYABORA (0800 693292)</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/track-order">Track Order</Link>
            <Link href="/help">Help</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Afya Bora"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full px-4 py-2 border-2 border-[#40E0D0] rounded-lg focus:outline-none"
                  placeholder="Search for medicines, lab tests and healthcare items..."
                />
                <button className="absolute right-0 top-0 h-full px-6 bg-[#40E0D0] text-white rounded-r-lg">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/wishlist" className="flex items-center text-gray-600 hover:text-[#40E0D0]">
                <Heart className="h-5 w-5 mr-1" />
                <span>Wishlist</span>
              </Link>
              <Link href="/account" className="flex items-center text-gray-600 hover:text-[#40E0D0]">
                <User className="h-5 w-5 mr-1" />
                <span>Account</span>
              </Link>
              <Link href="/cart" className="flex items-center text-gray-600 hover:text-[#40E0D0]">
                <div className="relative">
                  <ShoppingCart className="h-5 w-5 mr-1" />
                  <span className="absolute -top-2 -right-2 bg-[#40E0D0] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    0
                  </span>
                </div>
                <span>Cart</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Categories Menu */}
          <div className="hidden md:flex items-center space-x-6 py-4">
            {[
              'Prescription',
              'OTC Medicines',
              'Personal Care',
              'Wellness',
              'Baby Care',
              'Lab Tests',
              'Medical Devices',
              'Offers'
            ].map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase().replace(' ', '-')}`}
                className="text-gray-600 hover:text-[#40E0D0]"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
} 