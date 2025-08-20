
import React, { useState } from "react";
import { FaBell, FaHome, FaTag, FaInfoCircle } from "react-icons/fa";

export default function Alerts() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "price-drop",
      title: "Price Drop Alert",
      description: "A property in Lucknow has dropped its price by ₹50,000.",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "new-listing",
      title: "New Property Listed",
      description: "3 BHK Apartment in Delhi just got listed.",
      time: "5 hours ago",
    },
    {
      id: 3,
      type: "recommendation",
      title: "Recommended for You",
      description: "Based on your interest, check this villa in Noida.",
      time: "1 day ago",
    },
  ]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-indigo-600 text-white px-4 py-3 text-lg font-semibold shadow flex items-center gap-2">
        <FaBell /> Alerts
      </div>

      {/* Alerts List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {alerts.length === 0 ? (
          <p className="text-gray-500 text-center">No alerts available.</p>
        ) : (
          alerts.map((alert) => (
            <div
              key={alert.id}
              className="bg-white rounded-xl shadow p-4 flex items-start gap-3 hover:shadow-md transition"
            >
              <div className="text-indigo-600 mt-1">
                {alert.type === "price-drop" && <FaTag size={20} />}
                {alert.type === "new-listing" && <FaHome size={20} />}
                {alert.type === "recommendation" && <FaInfoCircle size={20} />}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{alert.title}</h3>
                <p className="text-sm text-gray-600">{alert.description}</p>
                <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
