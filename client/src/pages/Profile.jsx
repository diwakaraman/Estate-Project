import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    photo: '',
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Simulate user fetch
  useEffect(() => {
    // Replace this with real API
    setFormData({
      
      photo: 'p1.jpeg',
    });
  }, []);

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === 'photo' && files.length > 0) {
      setPreview(URL.createObjectURL(files[0]));
      setFormData((prev) => ({ ...prev, photo: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Upload image + send data to backend
      console.log('Profile data to update:', formData);

      setLoading(false);
      alert('Profile updated!');
    } catch (err) {
      setLoading(false);
      setError('Failed to update profile.');
    }
  };

  const handleSignOut = () => {
    // TODO: Clear token or session
    navigate('/signin');
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>My Profile</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        {/* Profile Photo with Styled Upload */}
        <div className='flex flex-col items-center gap-3'>
          <img
            src={preview || formData.photo}
            alt='Profile'
            className='w-24 h-24 rounded-full object-cover border'
          />

          <label
            htmlFor='photo'
            className='bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition'
          >
            Upload Photo
          </label>
          <input
            type='file'
            id='photo'
            accept='image/*'
            onChange={handleChange}
            className='hidden'
          />

          {formData.photo && typeof formData.photo === 'object' && (
            <p className='text-sm text-slate-600'>
              Selected: {formData.photo.name}
            </p>
          )}
        </div>

        {/* Username */}
        <input
          type='text'
          placeholder='Username'
          id='username'
          value={formData.username}
          onChange={handleChange}
          className='border p-3 rounded-lg'
        />

        {/* Email */}
        <input
          type='email'
          placeholder='Email'
          id='email'
          value={formData.email}
          onChange={handleChange}
          className='border p-3 rounded-lg'
        />

        {/* Password */}
        <input
          type='password'
          placeholder='Password'
          id='password'
          value={formData.password}
          onChange={handleChange}
          className='border p-3 rounded-lg'
        />

        {/* Submit Button */}
        <button
          type='submit'
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
      </form>

      {/* Sign Out */}
      <div className='flex justify-between mt-6 text-sm'>
        <button
          onClick={() => navigate('/')}
          className='text-blue-600 hover:underline'
        >
          ← Back to Home
        </button>
        <button
          onClick={handleSignOut}
          className='text-red-600 hover:underline'
        >
          Sign Out
        </button>
      </div>

      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
