import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';




const Description = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [listing, setListing] = useState(state?.listing || null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

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

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // 🔁 Replace this with actual POST to /api/bookings if backend exists
      console.log('Booking submitted:', {
        listingId: id,
        ...formData
      });

      alert("Booking request sent successfully!");
      setShowForm(false); // optionally close the form
      setFormData({ name: '', email: '', phone: '', message: '' }); // reset form
    } catch (err) {
      console.error("Booking failed", err);
      alert("Booking failed. Please try again.");
    }
  };

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

      <button
        onClick={() => setShowForm(!showForm)}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-lg"
      >
        {showForm ? 'Cancel Booking' : 'Book Now'}
      </button>

      {showForm && (
        <form
          onSubmit={handleFormSubmit}
          className="mt-6 bg-gray-100 p-6 rounded-lg shadow space-y-4"
        >
          <h2 className="text-xl font-semibold mb-4">Fill Booking Details</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />

          <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded"
          >
            Submit Booking
          </button>
        </form>
      )}
    </div>
  );
};

export default Description;
