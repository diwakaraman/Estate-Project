
import React, { useState } from "react";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";

export default function Ads() {
  const [ads, setAds] = useState([
    {
      id: 1,
      title: "3 BHK Apartment in Delhi",
      price: "₹45,00,000",
      location: "Delhi, India",
      date: "Listed on 15 Aug 2025",
      image:
        "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
      id: 2,
      title: "Luxury Villa in Noida",
      price: "₹1.2 Cr",
      location: "Noida, India",
      date: "Listed on 12 Aug 2025",
      image:
        "https://plus.unsplash.com/premium_photo-1689609950069-2961f80b1e70?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newAd, setNewAd] = useState({
    title: "",
    price: "",
    location: "",
    image: "",
  });

  const handleDelete = (id) => {
    setAds(ads.filter((ad) => ad.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit ad with ID: ${id} (You can navigate to edit form)`);
  };

  const handleCreate = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!newAd.title || !newAd.price || !newAd.location || !newAd.image) {
      alert("Please fill all fields!");
      return;
    }

    const newAdObj = {
      id: Date.now(),
      ...newAd,
      date: `Listed on ${new Date().toLocaleDateString()}`,
    };

    setAds([newAdObj, ...ads]);
    setNewAd({ title: "", price: "", location: "", image: "" });
    setShowForm(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-indigo-600 text-white px-4 py-3 text-lg font-semibold shadow flex justify-between items-center">
        <span>📢 My Ads</span>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-3 py-2 rounded-md text-sm font-semibold"
        >
          <FaPlus /> Create New Ad
        </button>
      </div>

      {/* Ads List */}
      <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ads.length === 0 ? (
          <p className="text-gray-500 text-center col-span-full">
            No ads available. Create one!
          </p>
        ) : (
          ads.map((ad) => (
            <div
              key={ad.id}
              className="bg-white rounded-xl shadow hover:shadow-md transition p-3 flex flex-col"
            >
              <img
                src={ad.image}
                alt={ad.title}
                className="rounded-md w-full h-40 object-cover"
              />
              <div className="flex-1 flex flex-col justify-between mt-3">
                <div>
                  <h3 className="font-semibold text-gray-800">{ad.title}</h3>
                  <p className="text-green-700 font-bold">{ad.price}</p>
                  <p className="text-sm text-gray-500">{ad.location}</p>
                  <p className="text-xs text-gray-400">{ad.date}</p>
                </div>
                <div className="flex justify-between mt-3">
                  <button
                    onClick={() => handleEdit(ad.id)}
                    className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(ad.id)}
                    className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Create New Ad Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Create New Ad</h2>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Title"
                value={newAd.title}
                onChange={(e) => setNewAd({ ...newAd, title: e.target.value })}
                className="border rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Price"
                value={newAd.price}
                onChange={(e) => setNewAd({ ...newAd, price: e.target.value })}
                className="border rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Location"
                value={newAd.location}
                onChange={(e) =>
                  setNewAd({ ...newAd, location: e.target.value })
                }
                className="border rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newAd.image}
                onChange={(e) => setNewAd({ ...newAd, image: e.target.value })}
                className="border rounded px-3 py-2"
              />
              <div className="flex justify-end gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 rounded bg-gray-400 hover:bg-gray-500 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
