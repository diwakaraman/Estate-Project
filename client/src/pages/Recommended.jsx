
import React, { useState } from "react";
import { FaHome, FaMapMarkerAlt, FaRupeeSign, FaStar } from "react-icons/fa";

const Recommended = () => {
  const [properties] = useState([
    {
      id: 1,
      title: "Luxury 3 BHK Apartment",
      location: "Bandra, Mumbai",
      price: "₹2.5 Cr",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "2 BHK Flat with Lake View",
      location: "Whitefield, Bangalore",
      price: "₹85 Lakhs",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "Beachside Villa",
      location: "North Goa",
      price: "₹3.2 Cr",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      title: "Premium Studio Apartment",
      location: "Connaught Place, Delhi",
      price: "₹55 Lakhs",
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a5c5e99a9?auto=format&fit=crop&w=800&q=60",
    },
  ]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-pink-600 text-white px-6 py-4 text-lg font-semibold shadow flex items-center gap-2">
        <FaHome /> Recommended Properties
      </div>

      {/* Properties Grid */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            {/* Property Image */}
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />

            {/* Property Details */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                {property.title}
              </h3>
              <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                <FaMapMarkerAlt className="text-gray-400" /> {property.location}
              </p>
              <p className="text-sm text-gray-700 flex items-center gap-2 mt-2">
                <FaRupeeSign className="text-gray-400" />{" "}
                <span className="font-medium">{property.price}</span>
              </p>
              <p className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                {Array.from({ length: Math.floor(property.rating) }).map(
                  (_, i) => (
                    <FaStar key={i} />
                  )
                )}
                <span className="text-gray-600 ml-2">
                  {property.rating} / 5
                </span>
              </p>

              <button className="mt-3 w-full bg-pink-600 text-white py-2 rounded-lg text-sm hover:bg-pink-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
