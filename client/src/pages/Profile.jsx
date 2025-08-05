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
import { Link } from "react-router-dom";

export default function Profile() {
  const { currentUser, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
        console.log(error);
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
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

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-6">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          ref={fileRef}
          accept="image/*"
        />
        <button
          type="button"
          onClick={handleFileUpload}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Upload Image
        </button>

        {fileUploadError && (
          <p className="text-red-500 text-sm">Image upload failed!</p>
        )}

        <input
          type="text"
          placeholder="Username"
          defaultValue={currentUser?.username}
          id="username"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          defaultValue={currentUser?.email}
          id="email"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          disabled={loading}
          className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
        {updateSuccess && (
          <p className="text-green-600 text-sm">Profile updated successfully!</p>
        )}
      </form>

      <div className="flex justify-between mt-4 text-sm">
        <Link to="/create-listing" className="text-blue-600 hover:underline">
          Create Listing
        </Link>
        <span
          className="text-red-500 cursor-pointer"
          onClick={() => dispatch(signOut())}
        >
          Sign Out
        </span>
      </div>
    </div>
  );
}
