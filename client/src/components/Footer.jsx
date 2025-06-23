import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white mt-5">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4">RealEstate</h2>
          <p className="text-sm text-slate-300">
            Helping you find your dream home, property, or commercial space with ease.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Links</h3>
          <ul className="space-y-1 text-sm text-slate-300">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/signin" className="hover:underline">Sign In</Link></li>
            <li><Link to="/signup" className="hover:underline">Sign Up</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm text-slate-300">
            Email: iamankumardiwakar.com <br />
            Phone: +91 7081997560 <br />
            Uttar Pradesh, India
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl text-white">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 text-center py-4 text-sm text-slate-400">
        &copy; {new Date().getFullYear()} RealEstate. All rights reserved.
      </div>
    </footer>
  );
}
