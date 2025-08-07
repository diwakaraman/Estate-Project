import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ListingItem from '../components/ListingItem';
import {
  FaSearch,
  FaHome,
  FaBed,
  FaBuilding,
  FaWarehouse,
  FaCity,
  FaBullseye,
  FaBullhorn,
  FaCreditCard,
  FaTags,
  FaMoneyBillWave,
  FaShieldAlt,
} from 'react-icons/fa';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?term=${searchInput}`);
    }
  };

  return (
    <div className="bg-white">
      {/* Search + Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by city, location, or keyword..."
            className="w-full sm:w-[600px] px-6 py-4 rounded-full border border-gray-300 shadow-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            <FaSearch className="inline mr-2" />
            Search
          </button>
        </form>

        {/* Category Links */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 text-center">
          {[
            { name: 'Buy', icon: <FaHome /> },
            { name: 'Rent', icon: <FaBed /> },
            { name: 'New Projects', icon: <FaBuilding /> },
            { name: 'PG', icon: <FaWarehouse /> },
            { name: 'Plot', icon: <FaCity /> },
            { name: 'Commercial', icon: <FaBullseye /> },
            { name: 'Post Free Property Ad', icon: <FaBullhorn /> },
          ].map((item, index) => (
            <Link
              key={index}
              to={`/search?category=${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex flex-col items-center bg-gray-100 p-4 rounded-lg hover:bg-blue-100 transition"
            >
              <div className="text-blue-600 text-2xl mb-2">{item.icon}</div>
              <span className="text-sm font-medium text-slate-700">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className='flex flex-col gap-6 px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto text-center'>
        <img
          src="/p2.jpg"
          alt="Beautiful Home"
          className="w-full max-h-[500px] object-cover rounded-lg shadow-lg mb-6"
        />
        <h1 className='text-slate-700 font-bold text-4xl lg:text-6xl'>
          Find your next <span className='text-slate-500'>perfect</span> place
        </h1>
        <p className='text-gray-500 text-sm sm:text-base'>
          RealEstate helps you find ideal homes and investments with ease.
        </p>
        <Link
          to='/search'
          className='text-blue-700 font-semibold hover:underline text-sm'
        >
          Let’s get started →
        </Link>
      </div>

      {/* Housing Edge Section */}
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-700 mb-10">Housing Edge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
              <Link to="/services"
                className="flex flex-col items-center text-center"
              >
                <FaCreditCard size={40} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Pay on Credit</h3>
                <p className="text-gray-600 text-sm">Pay your rent using Credit Card with ease and convenience.</p>
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
              <Link to="/services"
                className="flex flex-col items-center text-center"
              >

              <FaTags size={40} className="text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-700 mb-2">Housing Premium</h3>
              <p className="text-gray-600 text-sm">Instant access to zero brokerage properties with premium support.</p>
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
              <Link to="/services"
                className="flex flex-col items-center text-center"
              >
              <FaMoneyBillWave size={40} className="text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-slate-700 mb-2">Home Loans</h3>
              <p className="text-gray-600 text-sm">Get lowest interest rate offers on home loans from trusted banks.</p>
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
              <Link to="/services"
                className="flex flex-col items-center text-center"
              >
              <FaShieldAlt size={40} className="text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-slate-700 mb-2">Housing Protect</h3>
              <p className="text-gray-600 text-sm">Protection against cyber frauds to keep your transactions secure.</p>
              </Link>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
            >
              Explore Services &gt;
            </Link>
          </div>
        </div>
      </div>

      {/* Recommended Sellers Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-700 mb-10">Recommended Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sellers Data */}
            {[
              { initials: "CP", name: "Candid Properties", role: "Housing Expert Pro", areas: "Sultanpur Road, Gomti Nagar", experience: "15 years", properties: 41 },
              { initials: "SR", name: "Shobhit Raj Srivastav", role: "Housing Expert", areas: "Sultanpur Road, Indira Nagar", experience: "0.5 years", properties: 8 },
              { initials: "RU", name: "Ramesh Upadhyay", role: "Housing Expert Pro", areas: "Lolai, Gomti Nagar Extension", experience: "9 years", properties: 37 },
              { initials: "AE", name: "ABHISHEK ENTERPRISES", role: "Housing Expert", areas: "Vrindavan Yojana, Indira Nagar", experience: "12 years", properties: 10 },
              { initials: "AC", name: "Atul Chawla", role: "Housing Expert Pro", areas: "Vrindavan Yojana, Bijnor", experience: "16 years", properties: 34 },
              { initials: "SC", name: "SNH CONSTRUCTION", role: "Housing Expert", areas: "Vrindavan Yojana, Roberts Lines", experience: "4 years", properties: 30 },
              { initials: "SV", name: "SUNIL VERMA", role: "Housing Expert Pro", areas: "Ashiyana, Sharda Nagar", experience: "16 years", properties: 40 },
              { initials: "AA", name: "AYUSHMAN ASSOCIATES", role: "Housing Expert", areas: "Vrindavan Yojana, Sushant Golf City", experience: "16 years", properties: 35 },
            ].map((seller, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl shadow p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full text-xl font-bold">
                    {seller.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{seller.name}</h3>
                    <p className="text-sm text-gray-500">{seller.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1"><strong>Areas:</strong> {seller.areas}</p>
                <p className="text-sm text-gray-600 mb-1"><strong>Experience:</strong> {seller.experience}</p>
                <p className="text-sm text-gray-600"><strong>Properties:</strong> {seller.properties}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
