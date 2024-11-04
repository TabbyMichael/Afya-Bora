'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const isAuthenticated = false; // Replace with actual auth check

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-semibold mb-6">My Account</h2>
            <nav className="space-y-2">
              <Link 
                href="/account/profile" 
                className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link 
                href="/account/orders" 
                className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Orders
              </Link>
              <Link 
                href="/account/prescriptions" 
                className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Prescriptions
              </Link>
              <Link 
                href="/account/addresses" 
                className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Addresses
              </Link>
              <Link 
                href="/account/wishlist" 
                className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Wishlist
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 