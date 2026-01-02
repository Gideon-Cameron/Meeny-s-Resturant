import React from "react";
import { useCart } from "../context/CartContext";
import { MenuItem } from "../data/menu";

const CartPopup: React.FC = () => {
  const {
    items,
    total,
    isOpen,
    closeCart,
    clearCart,
    removeItem,
  } = useCart();

  // Do not render if popup is closed or cart empty
  if (!isOpen || items.length === 0) return null;

  /* ======================
     GROUP ITEMS BY ID
  ====================== */
  const groupedItems = items.reduce<Record<string, { item: MenuItem; qty: number }>>(
    (acc, item) => {
      if (!acc[item.id]) {
        acc[item.id] = { item, qty: 1 };
      } else {
        acc[item.id].qty += 1;
      }
      return acc;
    },
    {}
  );

  const handleConfirm = () => {
    console.log("✅ Order confirmed:", groupedItems);
    console.log("💰 Final total:", total);

    // Later: send to Firebase here
    clearCart();
    closeCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center">
      {/* BACKDROP */}
      <div
        className="absolute inset-0"
        onClick={closeCart}
      />

      {/* POPUP */}
      <div className="relative w-full max-w-md rounded-t-2xl bg-white p-6 shadow-xl sm:rounded-2xl">
        {/* HEADER */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Confirm Your Order
          </h2>

          <button
            onClick={closeCart}
            className="text-gray-500 hover:text-gray-800"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* ITEMS */}
        <ul className="max-h-64 space-y-3 overflow-y-auto">
          {Object.values(groupedItems).map(({ item, qty }) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b pb-2 text-gray-800"
            >
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-gray-500">
                  £{item.price} × {qty}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-semibold">
                  £{item.price * qty}
                </span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-sm text-red-500 hover:text-red-700"
                  aria-label="Remove one item"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* TOTAL */}
        <div className="mt-6 flex items-center justify-between text-lg font-bold">
          <span>Total</span>
          <span>£{total}</span>
        </div>

        {/* ACTIONS */}
        <div className="mt-6 space-y-3">
          <button
            onClick={handleConfirm}
            className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Confirm Order
          </button>

          <button
            onClick={clearCart}
            className="w-full text-sm font-medium text-red-600 hover:underline"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
