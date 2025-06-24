import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListingItem from '../components/ListingItem';
import { FaTags, FaHome, FaMoneyBillWave, FaBullhorn } from 'react-icons/fa';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* Top Hero Section */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto text-center'>
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

      {/* Listings Section */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-12 my-10'>
        {/* Offers */}
        {offerListings.length > 0 && (
          <div>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-2xl font-semibold text-slate-700 flex items-center gap-2'>
                <FaTags className='text-green-500' />
                Recent Offers
              </h2>
              <Link
                to='/search?offer=true'
                className='text-sm text-blue-700 hover:underline'
              >
                Show more offers
              </Link>
            </div>
            <div className='flex flex-wrap gap-6'>
              {offerListings.map((listing) => (
                <ListingItem key={listing._id} listing={listing} />
              ))}
            </div>
          </div>
        )}

        {/* Rent */}
        {rentListings.length > 0 && (
          <div>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-2xl font-semibold text-slate-700 flex items-center gap-2'>
                <FaBullhorn className='text-indigo-500' />
                Places for Rent
              </h2>
              <Link
                to='/search?type=rent'
                className='text-sm text-blue-700 hover:underline'
              >
                Show more rentals
              </Link>
            </div>
            <div className='flex flex-wrap gap-6'>
              {rentListings.map((listing) => (
                <ListingItem key={listing._id} listing={listing} />
              ))}
            </div>
          </div>
        )}

        {/* Sale */}
        {saleListings.length > 0 && (
          <div>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-2xl font-semibold text-slate-700 flex items-center gap-2'>
                <FaMoneyBillWave className='text-yellow-500' />
                Properties for Sale
              </h2>
              <Link
                to='/search?type=sale'
                className='text-sm text-blue-700 hover:underline'
              >
                Show more sales
              </Link>
            </div>
            <div className='flex flex-wrap gap-6'>
              {saleListings.map((listing) => (
                <ListingItem key={listing._id} listing={listing} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
