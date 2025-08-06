import {
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
  FaHome,
  FaInfoCircle,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Real-</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>

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
