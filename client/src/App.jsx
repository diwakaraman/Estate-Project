import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer'; 
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Search from './pages/Search';
import ListingItem from "./components/ListingItem";
import Description from './pages/Description';
import { updateListing } from '../../api/controllers/listing.controller';

import React from 'react';    
import Services from './pages/Services'; 
import ServicesBook from './pages/ServicesBook';
import Chats from './pages/Chats'; 
import Alerts from './pages/Alerts';
import Ads from './pages/Ads';
import Cart from './pages/Cart';
import DoorstepOffers from './pages/DoorstepOffers';
import Leads from './pages/Leads';
import InstantLeads from './pages/InstantLeads';
import Order from './pages/Order';
import Recommended from './pages/Recommended';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/listing/:listingId" element={<ListingItem />} />
        <Route path="/create-listing" element={<CreateListing />} />

        <Route path="/update-listing/:listingId" element={<UpdateListing />} />
        
        
        <Route path="/Description/:id" element={<Description />} />
        <Route path="/services" element={<Services />} />
        <Route path="/servicesbook" element={<ServicesBook />} />
        <Route path="*" element={<h1 className="text-center text-2xl text-red-500 mt-10">404 - Page Not Found</h1>} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/my-ads" element={<Ads />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/doorstep-offers" element={<DoorstepOffers />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/instant-leads" element={<InstantLeads />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/recommended" element={<Recommended />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
