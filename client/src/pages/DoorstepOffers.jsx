// src/pages/DoorstepOffers.jsx
import React from "react";
import { FaTag, FaRupeeSign, FaClock } from "react-icons/fa";

const DoorstepOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Luxury Villa in Noida",
      location: "Noida, India",
      price: 9500000,
      discount: "10% OFF",
      deadline: "Ends in 5 days",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=987&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "2 BHK Apartment in Delhi",
      location: "Delhi, India",
      price: 4500000,
      discount: "₹2 Lakh Cashback",
      deadline: "Limited Time",
      image:
        "https://images.unsplash.com/photo-1600573472591-ee6c8e6952a7?q=80&w=987&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Beachfront Villa in Goa",
      location: "Goa, India",
      price: 18000000,
      discount: "15% OFF",
      deadline: "Ends in 3 days",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=987&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-indigo-600 text-white px-6 py-4 text-lg font-semibold shadow">
        🔥 Doorstep Offers
      </div>

      {/* Offers Grid */}
      <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                {offer.title}
              </h3>
              <p className="text-sm text-gray-500">{offer.location}</p>

              <p className="flex items-center gap-1 text-green-700 font-bold mt-1">
                <FaRupeeSign /> {offer.price.toLocaleString()}
              </p>

              <div className="mt-3 flex justify-between items-center text-sm">
                <span className="flex items-center gap-1 text-red-500 font-semibold">
                  <FaTag /> {offer.discount}
                </span>
                <span className="flex items-center gap-1 text-gray-600">
                  <FaClock /> {offer.deadline}
                </span>
              </div>

              <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-medium">
                Grab Offer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoorstepOffers;
