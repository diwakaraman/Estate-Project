// src/pages/Order.jsx
import React, { useState } from "react";
import {
  FaHome,
  FaRupeeSign,
  FaCalendarAlt,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaCreditCard,
  FaUserTie,
} from "react-icons/fa";

const Order = () => {
  const [expanded, setExpanded] = useState(null); // Track expanded order

  const [orders] = useState([
    {
      id: "ORD12345",
      property: "2 BHK Apartment - Pune",
      amount: 25000,
      date: "2025-08-10",
      status: "Confirmed",
      paymentMode: "Credit Card",
      address: "Kalyani Nagar, Pune, Maharashtra",
      seller: "Dream Homes Pvt Ltd",
    },
    {
      id: "ORD12346",
      property: "Premium Listing Subscription",
      amount: 4999,
      date: "2025-08-05",
      status: "Active",
      paymentMode: "UPI",
      address: "Digital Service",
      seller: "EstateProject Premium",
    },
    {
      id: "ORD12347",
      property: "Villa - Goa",
      amount: 150000,
      date: "2025-07-28",
      status: "Pending",
      paymentMode: "Net Banking",
      address: "Baga Beach Road, Goa",
      seller: "Coastal Realty Group",
    },
  ]);

  const toggleDetails = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-indigo-600 text-white px-6 py-4 text-lg font-semibold shadow flex items-center gap-2">
        <FaHome /> My Orders
      </div>

      {/* Orders List */}
      <div className="p-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-xl p-4 mb-4 border hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800">{order.property}</h3>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  order.status === "Confirmed"
                    ? "bg-green-100 text-green-600"
                    : order.status === "Active"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {order.status}
              </span>
            </div>

            <p className="text-sm text-gray-600 flex items-center gap-2">
              <FaCalendarAlt className="text-gray-400" /> Ordered on: {order.date}
            </p>

            <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
              <FaRupeeSign className="text-gray-400" /> Amount:{" "}
              <span className="font-medium">₹{order.amount}</span>
            </p>

            {/* Expand / Collapse Button */}
            <div className="mt-3 flex justify-end">
              <button
                onClick={() => toggleDetails(order.id)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 flex items-center gap-2"
              >
                <FaCheckCircle /> {expanded === order.id ? "Hide Details" : "View Details"}
              </button>
            </div>

            {/* Expanded Details */}
            {expanded === order.id && (
              <div className="mt-4 border-t pt-3 text-sm text-gray-700 space-y-2">
                <p className="flex items-center gap-2">
                  <FaCreditCard className="text-gray-500" /> <strong>Payment Mode:</strong>{" "}
                  {order.paymentMode}
                </p>
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gray-500" /> <strong>Address:</strong>{" "}
                  {order.address}
                </p>
                <p className="flex items-center gap-2">
                  <FaUserTie className="text-gray-500" /> <strong>Seller:</strong>{" "}
                  {order.seller}
                </p>
                <p className="text-xs text-gray-500">Order ID: {order.id}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
