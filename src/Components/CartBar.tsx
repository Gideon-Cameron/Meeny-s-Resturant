import React from "react";
import { useCart } from "../context/CartContext";

const CartBar: React.FC = () => {
  const { items, total, openCart } = useCart();

  const itemCount = items.length;

  // Hide bar if nothing selected
  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* LEFT: ITEM COUNT */}
        <div className="text-sm font-medium text-gray-800">
          {itemCount} item{itemCount !== 1 ? "s" : ""} selected
        </div>

        {/* RIGHT: REVIEW BUTTON */}
        <button
          onClick={() => {
            console.log("🧾 Review order clicked");
            openCart();
          }}
          className="rounded-lg bg-green-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Review Order · £{total}
        </button>
      </div>
    </div>
  );
};

export default CartBar;
