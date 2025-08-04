import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ListingItem from '../components/ListingItem';


const Description = () => {
  const { state } = useLocation();
  const { id } = useParams(); // if needed for fetching from backend
  const listing = state?.listing;

  if (!listing) return <p>Loading listing details...</p>;

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-semibold mb-2'>{listing.title}</h1>
      <img src={listing.image || '../temp.jpg'} alt='Blog' className='w-full lg:w-3/4 my-4 rounded-lg' />
      <p className='text-gray-700 leading-relaxed'>{listing.description}</p>
    </div>
  );
};

export default Description;
