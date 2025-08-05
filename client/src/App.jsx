import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer'; 
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Search from './pages/Search';
import ListingItem from "./components/ListingItem";
import Description from './pages/Description';
import { updateListing } from '../../api/controllers/listing.controller';


import React from 'react';    

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
        <Route path="*" element={<h1 className="text-center text-2xl text-red-500 mt-10">404 - Page Not Found</h1>} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
