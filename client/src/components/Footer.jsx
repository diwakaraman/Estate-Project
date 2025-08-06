import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white mt-5">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold mb-4">RealEstate</h2>
          <p className="text-sm text-slate-300">
            Helping you find your dream home, property, or commercial space with ease.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-1 text-sm text-slate-300">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/signin" className="hover:underline">Sign In</Link></li>
            <li><Link to="/signup" className="hover:underline">Sign Up</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/search" className="hover:underline">Find Properties</Link></li>
          </ul>
        </div>

        {/* Popular Locations */}
        <div>
          <h3 className="font-semibold mb-3">Popular Searches</h3>
          <ul className="space-y-1 text-sm text-slate-300">
            <li><Link to="/search?location=Mumbai" className="hover:underline">Flats in Mumbai</Link></li>
            <li><Link to="/search?location=Bengaluru" className="hover:underline">Flats in Bengaluru</Link></li>
            <li><Link to="/search?location=Hyderabad" className="hover:underline">Flats in Hyderabad</Link></li>
            <li><Link to="/search?location=Pune" className="hover:underline">Flats in Pune</Link></li>
            <li><Link to="/search?location=Chennai" className="hover:underline">Flats in Chennai</Link></li>
           
        
          </ul>
        </div>

        {/* Property Types */}
        <div>
          <h3 className="font-semibold mb-3">Properties in India</h3>
          <ul className="space-y-1 text-sm text-slate-300">
            <li><Link to="/search?type=flats" className="hover:underline">Flats in India</Link></li>
            <li><Link to="/search?type=plots" className="hover:underline">Plots in India</Link></li>
            <li><Link to="/search?type=agriculture" className="hover:underline">Agricultural Lands in India</Link></li>
            <li><Link to="/search?category=sale" className="hover:underline">Find Properties for Sale</Link></li>
            <li><Link to="/search?category=rent" className="hover:underline">Rentals</Link></li>
            
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      {/* Bottom Bar */}
<div className="bg-slate-900 py-4 px-4 text-center text-sm text-slate-400">
  <p className="mb-2">&copy; {new Date().getFullYear()} RealEstate. All rights reserved.</p>
  <div className="flex justify-center gap-4 text-white text-lg">
    <a href="https://www.facebook.com/home.php"><FaFacebook /></a>
    <a href="https://www.instagram.com/mr_aman5588/"><FaInstagram /></a>
    <a href="#"><FaTwitter /></a>
  </div>
</div>

    </footer>
  );
}
