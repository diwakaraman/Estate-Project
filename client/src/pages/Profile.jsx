import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  signOut,
} from "../redux/user/userSlice";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const { currentUser, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fileRef = useRef();
  const [file, setFile] = useState(undefined);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownNavigation = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  const handleFileUpload = () => {
    if (!file) return;
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error("Upload Error:", error);
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
          setFileUploadError(false);
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateUserStart());
    try {
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        dispatch(updateUserSuccess(data));
        setUpdateSuccess(true);
      } else {
        dispatch(updateUserFailure(data.message));
      }
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/home");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 space-y-4 text-sm">
        <h2 className="text-lg font-bold mb-4">Quick Links</h2>
        <Link to="/create-listing" className="block text-blue-700 hover:underline">
          🏡 Create Listing
        </Link>
        <Link to="/search" className="block text-blue-700 hover:underline ">
          🔍 Search Listings
        </Link>
        <Link to="/about" className="block text-blue-700 hover:underline">
          📖 About Us
        </Link>
        <Link to="/home" className="block text-blue-700 hover:underline">
          🏠 Home
        </Link>
        <button
          onClick={handleSignOut}
          className="text-red-600 hover:underline font-semibold mt-6"
        >
          🚪 Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Dropdown Menu */}
        <div className="flex justify-end mb-4 relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-semibold"
          >
            {currentUser?.email || "My Account"} ▼
          </button>

          {isDropdownOpen && (
            <div className="absolute top-12 right-0 bg-white border shadow-lg rounded-lg w-64 z-50">
              <ul className="divide-y text-sm">
                <li className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleDropdownNavigation("/profile")}>My Account</li>
                <li className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleDropdownNavigation("/chats")
                  
                }>Chats</li>

                <li className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleDropdownNavigation("/alerts")}>Alerts</li>
                <li className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleDropdownNavigation("/my-ads")}>My Ads</li>
                <li className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleDropdownNavigation("/cart")}>My Cart</li>
                <li className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleDropdownNavigation("/doorstep-offers")}>My Doorstep Offers</li>
                <li className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleDropdownNavigation("/leads")}>My Leads</li>
                <li className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleDropdownNavigation("/instant-leads")}>Get Instant Leads</li>
                <li className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleDropdownNavigation("/orders")}>My Orders</li>
                <li className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleDropdownNavigation("/recommended")}>Recommended for Me</li>
                <li className="p-3 text-red-600 hover:bg-gray-100 cursor-pointer font-semibold" onClick={handleSignOut}>🚪 Log Out</li>
              </ul>
            </div>
          )}
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-6">My Profile</h1>

        {/* Profile Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white p-6 rounded-xl shadow">
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              ref={fileRef}
              className="w-full text-sm text-gray-600"
            />
            <button
              type="button"
              onClick={handleFileUpload}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Upload
            </button>
          </div>

          {fileUploadError && (
            <p className="text-sm text-red-600">❌ Failed to upload image.</p>
          )}

          <input
            type="text"
            id="username"
            placeholder="Username"
            defaultValue={currentUser?.username}
            onChange={handleChange}
            className="p-3 border rounded w-full"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            defaultValue={currentUser?.email}
            onChange={handleChange}
            className="p-3 border rounded w-full"
          />
          <input
            type="password"
            id="password"
            placeholder="New Password"
            onChange={handleChange}
            className="p-3 border rounded w-full"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded font-semibold text-white ${
              loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
            } transition`}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>

          {updateSuccess && (
            <p className="text-green-600 text-sm mt-2 text-center">
              ✅ Profile updated successfully!
            </p>
          )}
        </form>

        {/* Dashboard Boxes */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-800">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-1">My Ads</h3>
            <Link to="/my-ads" className="text-blue-600 hover:underline">
              View or Manage Ads
            </Link>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-1">My Cart</h3>
            <Link to="/cart" className="text-blue-600 hover:underline">
              View Items in Cart
            </Link>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-1">Cashback-Balance</h3>
            <p className="text-green-700 font-bold">₹0</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-1">My Orders</h3>
            <Link to="/orders" className="text-blue-600 hover:underline">
              Check Order History
            </Link>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-1">Saved Services</h3>
            <Link to="/services" className="text-blue-600 hover:underline">
              Booked or Interested
            </Link>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-1">Recommended</h3>
            <Link to="/recommended" className="text-blue-600 hover:underline">
              View Recommendations
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
