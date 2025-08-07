import React from 'react';
import {
  FaTags,
  FaCreditCard,
  FaMoneyBillWave,
  FaShieldAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import servicesData from '../Data/servicesData';

const iconMap = {
  FaTags: FaTags,
  FaCreditCard: FaCreditCard,
  FaMoneyBillWave: FaMoneyBillWave,
  FaShieldAlt: FaShieldAlt,
};

export default function Services() {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-700 mb-12">
          Housing Edge
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Link
                key={service.id}
                to="/servicesbook"
                state={{ service }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 block"
              >
                <Icon size={40} className={`${service.color} mb-4`} />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
