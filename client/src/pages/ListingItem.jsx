import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListingItem = ({ listing }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/description/${listing._id}`, { state: { listing } });
  };

  return (
    <div
      onClick={handleClick}
      className='cursor-pointer border p-4 rounded-lg hover:shadow-lg transition w-full sm:w-[48%] lg:w-[30%]'
    >
      <img
        src={listing.image || '/default-listing.jpg'}
        alt='Listing'
        className='w-full h-40 object-cover rounded-md mb-3'
        onError={(e) => { e.target.src = '/default-listing.jpg'; }}
      />
      <h2 className='text-lg font-semibold text-slate-800 mb-1'>{listing.title}</h2>
      <p className='text-sm text-gray-600 mb-1'>{listing.description?.slice(0, 60)}...</p>
      <p className='text-sm text-slate-600'>
        <span className='font-semibold'>Location:</span> {listing.location || 'Not specified'}
      </p>
      <p className='text-sm text-green-600 font-semibold'>
        ₹{listing.regularPrice?.toLocaleString() || 'N/A'}
        {listing.type === 'rent' && <span className='text-xs'> /month</span>}
      </p>
      <p className='text-xs text-gray-500 mt-1'>
        Posted on: {new Date(listing.created_at).toLocaleDateString()}
      </p>
    </div>
  );
};

export default ListingItem;
