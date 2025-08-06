import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Description = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [listing, setListing] = useState(state?.listing || null);

  // Optional: fetch listing by id if not passed in state
  useEffect(() => {
    const fetchListingById = async () => {
      if (!listing && id) {
        try {
          const res = await fetch(`/api/listing/${id}`);
          const data = await res.json();
          setListing(data);
        } catch (error) {
          console.error('Error fetching listing:', error);
        }
      }
    };

    fetchListingById();
  }, [id, listing]);

  if (!listing) return <p className="p-6 text-lg">Loading listing details...</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>

      <img
        src={listing.image || '/default.jpg'}
        alt="Property"
        className="w-full h-96 object-cover rounded-lg mb-4"
      />

      <div className="text-gray-700 text-lg space-y-3">
        <p><strong>Location:</strong> {listing.location || 'Not specified'}</p>
        <p><strong>Price:</strong> ₹{listing.regularPrice?.toLocaleString() || 'N/A'} {listing.type === 'rent' ? '/month' : ''}</p>
        <p><strong>Bedrooms:</strong> {listing.bedrooms || 'N/A'}</p>
        <p><strong>Area:</strong> {listing.areaRange || 'N/A'} sqft</p>
        <p><strong>Furnished:</strong> {listing.furnished ? 'Yes' : 'No'}</p>
        <p><strong>Parking:</strong> {listing.parking ? 'Available' : 'Not available'}</p>
        <p><strong>Description:</strong> {listing.description || 'No description available.'}</p>
      </div>

      <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-lg">
        Book Now
      </button>
    </div>
  );
};

export default Description;
