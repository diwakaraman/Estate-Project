// src/pages/Cart.jsx
import React, { useState } from "react";
import { FaTrash, FaShoppingCart, FaRupeeSign } from "react-icons/fa";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "2 BHK Apartment in Lucknow",
      price: 3500000,
      location: "Lucknow, India",
      image:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=987&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Luxury Villa in Pune",
      price: 12000000,
      location: "Pune, India",
      image:
        "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?q=80&w=987&auto=format&fit=crop",
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-indigo-600 text-white px-4 py-3 text-lg font-semibold shadow flex items-center gap-2">
        <FaShoppingCart /> My Cart
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-6">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">
            Your cart is empty 🛒
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow hover:shadow-md transition p-3 flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md w-full h-40 object-cover"
                />
                <div className="mt-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-green-700 font-bold flex items-center gap-1">
                      <FaRupeeSign /> {item.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="mt-3 flex items-center gap-2 px-3 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                  >
                    <FaTrash /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer / Checkout */}
      {cartItems.length > 0 && (
        <div className="bg-white border-t p-4 flex justify-between items-center">
          <span className="font-semibold text-lg flex items-center gap-1">
            Total: <FaRupeeSign /> {totalPrice.toLocaleString()}
          </span>
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-semibold">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
