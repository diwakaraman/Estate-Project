import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer'; 
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import CreateListing from './pages/CreateListing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Search from './pages/Search';
import ListingItem from "./components/ListingItem";
import Description from './pages/Description';
import { updateListing } from '../../api/controllers/listing.controller';



import React from 'react';    
import Services from './pages/Services'; // Importing the Services component
import ServicesBook from './pages/ServicesBook';
import Chats from './pages/Chats'; // Importing the Chats component
import Alerts from './pages/Alerts'; // Importing the Alerts component
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

       

        <Route path="/update-listing/:listingId" element=
        {<CreateListing />} />

        <Route path="/Description/:id" element={<Description />} />

       <Route path="/services" element={<Services />} /> {/* Adding the Services route */}

      <Route path="/servicesbook" element={<ServicesBook />} />
      

        <Route path="*" element={<h1 className="text-center text-2xl text-red-500 mt-10">404 - Page Not Found</h1>} />

        <Route path="/chats" element={<Chats />} /> {/* Adding the Chats route */}
        <Route path="/alerts" element={<Alerts />} /> {/* Adding the Alerts route */}
        
        <Route path="/my-ads" element={<Ads />} /> {/* Reusing Ads component for My Ads */}
        <Route path="/cart" element={<Cart />} /> {/* Adding the Cart route */}
        <Route path="/doorstep-offers" element={<DoorstepOffers />} /> {/* Adding the Doorstep Offers route */}
        <Route path="/leads" element={<Leads />} /> {/* Adding the Leads route */}
        <Route path="/instant-leads" element={<InstantLeads />} /> {/* Adding the Instant Leads route */}
        <Route path="/orders" element={<Order />} /> {/* Adding the Order route */}
        <Route path="/recommended" element={<Recommended />} /> {/* Adding the Recommended route */}


      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
