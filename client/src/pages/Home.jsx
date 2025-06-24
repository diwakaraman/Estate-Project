import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListingItem from '../components/ListingItem';
import { FaTags, FaHome, FaMoneyBillWave, FaBullhorn } from 'react-icons/fa';
// If your image is in src/assets
// import heroHome from '../assets/hero-home.jpg';

export default function Home() {
  // ...your state and useEffect code (unchanged)

  return (
    <div>
      {/* Top Hero Section */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-7xl mx-auto text-center'>
        {/* Big Home Photo */}
        <img
          src="/p2.jpg" // or use {heroHome} if imported
          alt="Beautiful Home"
          className="w-full max-h-[500px] object-cover rounded-lg shadow-lg mb-6"
        />
        <h1 className='text-slate-700 font-bold text-4xl lg:text-6xl flex flex-col items-center'>
          <FaHome className='text-slate-500 mb-2' size={40} />
          Find your next <span className='text-slate-500'>perfect</span> place
        </h1>
        <p className='text-gray-500 text-sm sm:text-base'>
          RealEstate is your trusted place to find ideal homes to live and invest in.<br />
          Browse premium listings tailored to your preferences.
        </p>
        <Link
          to='/search'
          className='text-blue-700 font-semibold hover:underline text-sm'
        >
          Let’s get started →
        </Link>
      </div>

      {/* ...rest of your code */}
    </div>
  );
}
