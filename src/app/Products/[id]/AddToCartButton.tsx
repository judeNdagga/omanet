"use client";

import { useState, useTransition } from "react";

interface AddToCartButtonprops {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
}

export default function AddToCartButton({
  productId,
  incrementProductQuantity,
}: AddToCartButtonprops) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  return (
    <div className="flex items-center gap-3">
      <button
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm tracking-wide shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
        disabled={isPending}
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQuantity(productId);
            setSuccess(true);
          });
        }}
      >
        {isPending ? "Adding…" : "Add to Cart"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </button>
      {!isPending && success && (
        <span className="text-emerald-600 text-sm font-medium">Added to cart ✓</span>
      )}
    </div>
  );
}
