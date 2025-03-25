
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Header from './components/Header';




export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
           


    </Routes>
    </BrowserRouter>
  );
}
