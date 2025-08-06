// src/pages/Profile.jsx
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
  const navigate = useNavigate(); // Add this line

  const fileRef = useRef();
  const [file, setFile] = useState(undefined);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

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
    navigate("/home"); // Or use navigate("/") if your home is at "/"
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-xl mt-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">My Profile</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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

      <div className="flex flex-wrap justify-center mt-6 gap-4 text-sm">
        <Link to="/create-listing" className="text-blue-700 hover:underline">
          🏡 Create Listing
        </Link>
        <Link to="/search" className="text-blue-700 hover:underline">
          🔍 Search Listings
        </Link>
        <Link to="/about" className="text-blue-700 hover:underline">
          📖 About Us
        </Link>
        <Link to="/home" className="text-blue-700 hover:underline">
          🏠 Home
        </Link>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handleSignOut}
          className="text-red-600 hover:underline font-semibold"
        >
          🚪 Sign Out
        </button>
      </div>
    </div>
  );
}
