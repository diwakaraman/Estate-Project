// src/pages/Leads.jsx
import React from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaHome } from "react-icons/fa";

const Leads = () => {
  const leads = [
    {
      id: 1,
      name: "Rohit Sharma",
      email: "rohit@example.com",
      phone: "+91 9876543210",
      interest: "2 BHK Apartment in Noida",
      status: "New",
    },
    {
      id: 2,
      name: "Anjali Gupta",
      email: "anjali@example.com",
      phone: "+91 9123456789",
      interest: "Luxury Villa in Goa",
      status: "Contacted",
    },
    {
      id: 3,
      name: "Arjun Verma",
      email: "arjun@example.com",
      phone: "+91 9988776655",
      interest: "3 BHK Flat in Delhi",
      status: "Converted",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "bg-yellow-100 text-yellow-800";
      case "Contacted":
        return "bg-blue-100 text-blue-800";
      case "Converted":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-indigo-600 text-white px-6 py-4 text-lg font-semibold shadow">
        📋 Leads Management
      </div>

      {/* Leads Table */}
      <div className="p-6 overflow-x-auto">
        <table className="w-full bg-white shadow rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Contact</th>
              <th className="px-4 py-3 text-left">Interest</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-b last:border-0 hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 flex items-center gap-2">
                  <FaUser className="text-gray-500" /> {lead.name}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="text-gray-400" /> {lead.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaPhoneAlt className="text-gray-400" /> {lead.phone}
                  </p>
                </td>
                <td className="px-4 py-3 text-gray-700 flex items-center gap-2">
                  <FaHome className="text-gray-400" /> {lead.interest}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      lead.status
                    )}`}
                  >
                    {lead.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leads;
