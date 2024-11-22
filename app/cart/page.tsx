'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Trash2, MinusCircle, PlusCircle, Shield, Truck, Lock } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, itemsCount } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
        <div className="bg-white rounded-lg shadow p-6 sm:p-8 text-center">
          <Image
            src="/images/empty-cart.png"
            alt="Empty Cart"
            width={200}
            height={200}
            className="mx-auto mb-6"
          />
          <h1 className="text-xl sm:text-2xl font-bold mb-4 text-black">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link 
            href="/"
            className="inline-block bg-[#40E0D0] text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-[#3CE0D0] transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2 sm:mb-0">Shopping Cart</h1>
          <p className="text-gray-600">
            {itemsCount} {itemsCount === 1 ? 'item' : 'items'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Cart Section */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow">
              {/* Cart Header - Hide on Mobile */}
              <div className="hidden sm:block p-6 border-b">
                <div className="grid grid-cols-12 text-sm text-gray-500">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>
              </div>

              {/* Cart Items */}
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="p-4 sm:p-6">
                    <div className="flex flex-col sm:grid sm:grid-cols-12 sm:gap-4 sm:items-center">
                      {/* Product Image & Info */}
                      <div className="flex items-start gap-4 sm:col-span-6 mb-4 sm:mb-0">
                        <div className="relative w-20 sm:w-24 h-20 sm:h-24 flex-shrink-0">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="flex justify-between items-start gap-2">
                            <Link 
                              href={`/product/${item.product.id}`}
                              className="text-base sm:text-lg font-semibold text-black hover:text-[#40E0D0] truncate"
                            >
                              {item.product.name}
                            </Link>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="p-1.5 sm:p-2 hover:bg-red-50 rounded-full group transition-colors flex-shrink-0"
                              title="Remove item"
                            >
                              <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {item.product.brand} • {item.product.packSize}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button className="text-[#40E0D0] hover:underline text-sm">
                              Save for Later
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Price */}
                      <div className="sm:hidden flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">Price:</span>
                        <span className="text-base font-semibold text-black">
                          KSh {item.product.price.toLocaleString()}
                        </span>
                      </div>

                      {/* Desktop Price */}
                      <div className="hidden sm:block sm:col-span-2 text-center">
                        <p className="text-lg font-semibold text-black">
                          KSh {item.product.price.toLocaleString()}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between sm:justify-center gap-2 mb-4 sm:mb-0 sm:col-span-2">
                        <span className="text-sm text-gray-500 sm:hidden">Quantity:</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="text-gray-500 hover:text-[#40E0D0] disabled:opacity-50"
                          >
                            <MinusCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                          </button>
                          <input
                            type="number"
                            min="1"
                            max="10"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                            className="w-12 text-center border rounded-md"
                          />
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="text-gray-500 hover:text-[#40E0D0]"
                          >
                            <PlusCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                          </button>
                        </div>
                      </div>

                      {/* Mobile Total */}
                      <div className="sm:hidden flex justify-between items-center">
                        <span className="text-sm text-gray-500">Total:</span>
                        <span className="text-base font-bold text-black">
                          KSh {(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>

                      {/* Desktop Total */}
                      <div className="hidden sm:block sm:col-span-2 text-right">
                        <p className="text-lg font-bold text-black">
                          KSh {(item.product.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Footer */}
              <div className="p-4 sm:p-6 border-t bg-gray-50">
                <div className="flex justify-between items-center">
                  <div className="text-sm sm:text-base text-gray-600">
                    Subtotal ({itemsCount} {itemsCount === 1 ? 'item' : 'items'})
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-black">
                    KSh {cartTotal.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="mt-6 sm:mt-8 bg-white rounded-lg shadow p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4 text-green-600">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
                <div>
                  <p className="font-semibold">Free Delivery</p>
                  <p className="text-sm">Estimated delivery by Tomorrow</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-black">Order Summary</h2>
              
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex justify-between text-sm sm:text-base text-black">
                  <span>Subtotal ({itemsCount} items)</span>
                  <span>KSh {cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base text-black">
                  <span>Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t pt-3 sm:pt-4">
                  <div className="flex justify-between text-lg sm:text-xl font-bold text-black">
                    <span>Total</span>
                    <span>KSh {cartTotal.toLocaleString()}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    including VAT
                  </p>
                </div>
              </div>

              <button className="w-full bg-[#40E0D0] text-white py-3 sm:py-4 rounded-lg hover:bg-[#3CE0D0] transition-colors mb-4 flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" />
                Proceed to Checkout
              </button>

              {/* Security Features */}
              <div className="border-t pt-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-2">
                  <Shield className="w-4 h-4" />
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <Truck className="w-4 h-4" />
                  <span>Free Delivery on All Orders</span>
                </div>
              </div>
            </div>

            {/* Recently Viewed */}
            <div className="mt-6 bg-white rounded-lg shadow p-4 sm:p-6">
              <h3 className="font-semibold text-black mb-4">
                Recently Viewed Items
              </h3>
              {/* Add recently viewed items here */}
            </div>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="mt-6 sm:mt-8 text-center">
          <Link 
            href="/"
            className="text-[#40E0D0] hover:underline inline-flex items-center gap-1"
          >
            <span>←</span>
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
