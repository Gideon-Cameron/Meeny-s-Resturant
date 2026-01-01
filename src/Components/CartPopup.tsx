import React from "react";
import { useCart } from "../context/CartContext";

const CartPopup: React.FC = () => {
  const { items, total, clearCart } = useCart();

  // Do not render if cart is empty
  if (items.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center">
      {/* BACKDROP CLICK AREA */}
      <div className="absolute inset-0" />

      {/* POPUP */}
      <div className="relative w-full max-w-md rounded-t-2xl bg-white p-6 shadow-xl sm:rounded-2xl">
        {/* HEADER */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Your Order
          </h2>
          <button
            onClick={clearCart}
            className="text-sm font-medium text-red-600 hover:underline"
          >
            Clear
          </button>
        </div>

        {/* ITEMS */}
        <ul className="max-h-64 space-y-3 overflow-y-auto">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between border-b pb-2 text-gray-800"
            >
              <span>{item.name}</span>
              <span className="font-semibold">£{item.price}</span>
            </li>
          ))}
        </ul>

        {/* TOTAL */}
        <div className="mt-6 flex items-center justify-between text-lg font-bold">
          <span>Total</span>
          <span>£{total}</span>
        </div>

        {/* ACTION (placeholder) */}
        <button
          className="mt-6 w-full rounded-lg bg-green-600 py-3 font-semibold text-white opacity-60"
          disabled
        >
          Checkout (next step)
        </button>
      </div>
    </div>
  );
};

export default CartPopup;
