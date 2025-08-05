import {
  FaSearch,
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
  FaHome,
  FaInfoCircle,
} from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Sahand</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>

        <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type='submit'>
            <FaSearch className='text-slate-600' />
          </button>
        </form>

        <ul className='flex gap-4 items-center'>
          <Link
            to='/'
            className='flex items-center gap-1 text-slate-700 hover:underline'
          >
            <FaHome />
            <span className='hidden sm:inline'>Home</span>
          </Link>

          <Link
            to='/about'
            className='flex items-center gap-1 text-slate-700 hover:underline'
          >
            <FaInfoCircle />
            <span className='hidden sm:inline'>About</span>
          </Link>

          {currentUser ? (
            <Link
              to='/profile'
              className='flex items-center gap-1 text-slate-700 hover:underline'
            >
              <FaUserCircle />
              <span className='hidden sm:inline'>Profile</span>
            </Link>
          ) : (
            <>
              <Link
                to='/signin'
                className='flex items-center gap-1 text-slate-700 hover:underline'
                title='Sign In'
              >
                <FaSignInAlt />
                <span className='hidden sm:inline'>Sign In</span>
              </Link>

              <Link
                to='/signup'
                className='flex items-center gap-1 text-slate-700 hover:underline'
                title='Sign Up'
              >
                <FaUserPlus />
                <span className='hidden sm:inline'>Sign Up</span>
              </Link>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}
