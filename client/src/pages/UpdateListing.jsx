import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateListing() {
  const { listingId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    address: '',
    type: 'sale',
    furnished: false,
    parking: false,
    offer: false,
  });
  const [loading, setLoading] = useState(false);

  // Fetch existing listing data
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`/api/listing/${listingId}`);
        const data = await res.json();
        if (res.ok) {
          setFormData(data);
        } else {
          alert(data.message || 'Failed to load listing');
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchListing();
  }, [listingId]);

  // Handle form change
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/listing/update/${listingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (res.ok) {
        alert('Listing updated successfully!');
        navigate(`/listing/${listingId}`);
      } else {
        alert(data.message || 'Failed to update listing');
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Update Listing</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border p-2 rounded"
        />
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 rounded"
        />
        <input
          id="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-2 rounded"
        />
        <input
          id="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full border p-2 rounded"
        />
        <select
          id="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="sale">Sale</option>
          <option value="rent">Rent</option>
        </select>

        <label>
          <input
            id="furnished"
            type="checkbox"
            checked={formData.furnished}
            onChange={handleChange}
          />{' '}
          Furnished
        </label>
        <label>
          <input
            id="parking"
            type="checkbox"
            checked={formData.parking}
            onChange={handleChange}
          />{' '}
          Parking
        </label>
        <label>
          <input
            id="offer"
            type="checkbox"
            checked={formData.offer}
            onChange={handleChange}
          />{' '}
          Offer
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Updating...' : 'Update Listing'}
        </button>
      </form>
    </div>
  );
}

export default UpdateListing;
