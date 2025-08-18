// src/pages/InstantLeads.jsx
import React, { useState } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaBolt } from "react-icons/fa";

const InstantLeads = () => {
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "Priya Mehta",
      email: "priya@example.com",
      phone: "+91 9876543210",
      interest: "1 BHK Flat in Mumbai",
      time: "Just Now",
    },
    {
      id: 2,
      name: "Vikram Singh",
      email: "vikram@example.com",
      phone: "+91 9123456789",
      interest: "Commercial Office Space in Bangalore",
      time: "2 min ago",
    },
    {
      id: 3,
      name: "Kavita Sharma",
      email: "kavita@example.com",
      phone: "+91 9988776655",
      interest: "Villa in Jaipur",
      time: "5 min ago",
    },
  ]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-green-600 text-white px-6 py-4 text-lg font-semibold shadow flex items-center gap-2">
        <FaBolt /> ⚡ Instant Leads
      </div>

      {/* Leads List */}
      <div className="p-6 grid gap-4">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center border hover:shadow-lg transition"
          >
            <div>
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <FaUser className="text-gray-500" /> {lead.name}
              </h3>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaEnvelope className="text-gray-400" /> {lead.email}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaPhoneAlt className="text-gray-400" /> {lead.phone}
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Interest: <span className="font-medium">{lead.interest}</span>
              </p>
            </div>
            <div className="text-xs text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full">
              {lead.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstantLeads;
