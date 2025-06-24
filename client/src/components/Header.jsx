import { FaSearch, FaHome, FaInfoCircle, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?searchTerm=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <div className='flex justify-between items-center max-w-7xl mx-auto px-4 py-3'>
        {/* Logo */}
        <Link to='/'>
          <h1 className='text-xl sm:text-2xl font-bold flex items-center gap-1'>
            <span className='text-slate-500'>Real</span>
            <span className='text-slate-800'>Estate</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className='bg-slate-100 p-2 rounded-lg flex items-center shadow-sm'
        >
          <input
            type='text'
            placeholder='Search listings...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='bg-transparent focus:outline-none w-24 sm:w-64 text-sm px-1'
          />
          <button type='submit'>
            <FaSearch className='text-slate-500 hover:text-slate-700' />
          </button>
        </form>

        {/* Navigation */}
        <ul className='flex gap-4 items-center text-slate-600 text-sm font-medium'>
          <Link to='/home'>
            <li className='flex items-center gap-1 hover:text-blue-600 transition'>
              <FaHome /> <span className='hidden sm:inline'>Home</span>
            </li>
          </Link>
          <Link to='/about'>
            <li className='flex items-center gap-1 hover:text-blue-600 transition'>
              <FaInfoCircle /> <span className='hidden sm:inline'>About</span>
            </li>
          </Link>
          <Link to='/signin'>
            <li className='flex items-center gap-1 hover:text-blue-600 transition'>
              <FaSignInAlt /> <span className='hidden sm:inline'>Sign In</span>
            </li>
          </Link>
          <Link to='/signup'>
            <li className='flex items-center gap-1 hover:text-blue-600 transition'>
              <FaUserPlus /> <span className='hidden sm:inline'>Sign Up</span>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
