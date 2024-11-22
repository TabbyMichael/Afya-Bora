'use client';

import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

type AddToCartButtonProps = {
  product: Product;
  quantity?: number;
  className?: string;
};

export default function AddToCartButton({ 
  product, 
  quantity = 1,
  className = "bg-[#40E0D0] text-white py-2 px-4 rounded-lg hover:bg-[#3CE0D0] transition-colors w-full"
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      className={className}
      onClick={() => {
        addToCart(product, quantity);
        // Optional: Add a toast notification here
      }}
    >
      Add to Cart
    </button>
  );
}
