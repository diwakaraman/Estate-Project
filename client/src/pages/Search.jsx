import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ListingItem from '../components/ListingItem';

export default function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebardata, setSidebardata] = useState({
    searchTerm: '',
    type: 'all',
    parking: false,
    furnished: false,
    offer: false,
    sort: 'created_at',
    order: 'desc',
    bedrooms: '',
    areaRange: '',
  });

  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const typeFromUrl = urlParams.get('type');
    const parkingFromUrl = urlParams.get('parking');
    const furnishedFromUrl = urlParams.get('furnished');
    const offerFromUrl = urlParams.get('offer');
    const sortFromUrl = urlParams.get('sort');
    const orderFromUrl = urlParams.get('order');
    const bedroomsFromUrl = urlParams.get('bedrooms');
    const areaRangeFromUrl = urlParams.get('areaRange');

    setSidebardata({
      searchTerm: searchTermFromUrl || '',
      type: typeFromUrl || 'all',
      parking: parkingFromUrl === 'true',
      furnished: furnishedFromUrl === 'true',
      offer: offerFromUrl === 'true',
      sort: sortFromUrl || 'created_at',
      order: orderFromUrl || 'desc',
      bedrooms: bedroomsFromUrl || '',
      areaRange: areaRangeFromUrl || '',
    });

    const fetchListings = async () => {
      setLoading(true);
      setShowMore(false);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      setShowMore(data.length > 8);
      setListings(data);
      setLoading(false);
    };

    fetchListings();
  }, [location.search]);

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;

    if (id === 'sort_order') {
      const [sort, order] = value.split('_');
      setSidebardata((prev) => ({ ...prev, sort, order }));
    } else if (type === 'checkbox') {
      if (['all', 'rent', 'sale'].includes(id)) {
        setSidebardata((prev) => ({ ...prev, type: id }));
      } else {
        setSidebardata((prev) => ({ ...prev, [id]: checked }));
      }
    } else {
      setSidebardata((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    Object.entries(sidebardata).forEach(([key, value]) =>
      urlParams.set(key, value)
    );
    navigate(`/search?${urlParams.toString()}`);
  };

  const onShowMoreClick = async () => {
    const startIndex = listings.length;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const res = await fetch(`/api/listing/get?${urlParams.toString()}`);
    const data = await res.json();
    setListings((prev) => [...prev, ...data]);
    if (data.length < 9) setShowMore(false);
  };

  return (
    <div className='flex flex-col md:flex-row'>
      {/* Sidebar */}
      <div className='p-7 border-b-2 md:border-r-2 md:min-h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Search Term:</label>
            <input
              type='text'
              id='searchTerm'
              className='border rounded-lg p-3 w-full'
              placeholder='Search...'
              value={sidebardata.searchTerm}
              onChange={handleChange}
            />
          </div>

          <div className='flex gap-4 flex-wrap'>
            <label className='font-semibold'>Type:</label>
            {['all', 'rent', 'sale'].map((item) => (
              <label key={item} className='flex gap-1 items-center'>
                <input
                  type='checkbox'
                  id={item}
                  checked={sidebardata.type === item}
                  onChange={handleChange}
                />
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </label>
            ))}
            <label className='flex gap-1 items-center'>
              <input
                type='checkbox'
                id='offer'
                checked={sidebardata.offer}
                onChange={handleChange}
              />
              Offer
            </label>
          </div>

          <div className='flex gap-4 flex-wrap'>
            <label className='font-semibold'>Amenities:</label>
            <label className='flex gap-1 items-center'>
              <input
                type='checkbox'
                id='parking'
                checked={sidebardata.parking}
                onChange={handleChange}
              />
              Parking
            </label>
            <label className='flex gap-1 items-center'>
              <input
                type='checkbox'
                id='furnished'
                checked={sidebardata.furnished}
                onChange={handleChange}
              />
              Furnished
            </label>
          </div>

          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Sort:</label>
            <select
              id='sort_order'
              className='border p-2 rounded-lg'
              onChange={handleChange}
              value={`${sidebardata.sort}_${sidebardata.order}`}
            >
              <option value='regularPrice_desc'>Price High → Low</option>
              <option value='regularPrice_asc'>Price Low → High</option>
              <option value='created_at_desc'>Latest</option>
              <option value='created_at_asc'>Oldest</option>
            </select>
          </div>

          <button
            type='button'
            onClick={() => setShowAdvanced((prev) => !prev)}
            className='text-blue-600 underline text-left'
          >
            {showAdvanced ? 'Hide More Options ▲' : 'Show More Options ▼'}
          </button>

          {showAdvanced && (
            <div className='flex flex-col gap-4 border-t pt-4'>
              <div className='flex gap-2 items-center'>
                <label className='font-semibold'>Bedrooms:</label>
                <input
                  type='number'
                  id='bedrooms'
                  min={1}
                  className='border rounded-lg p-2 w-20'
                  value={sidebardata.bedrooms}
                  onChange={handleChange}
                  placeholder='Any'
                />
              </div>
              <div className='flex gap-2 items-center'>
                <label className='font-semibold'>Area Range (sqft):</label>
                <input
                  type='text'
                  id='areaRange'
                  className='border rounded-lg p-2'
                  value={sidebardata.areaRange}
                  onChange={handleChange}
                  placeholder='e.g. 500-1500'
                />
              </div>
            </div>
          )}

          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
            Search
          </button>
        </form>
      </div>

      {/* Listings Section */}
      <div className='flex-1'>
        <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>
          Listing Results:
        </h1>
        <div className='p-7 flex flex-wrap gap-4'>
          {!loading && listings.length === 0 && (
            <p className='text-xl text-slate-700'>No listing found!</p>
          )}

          {loading && (
            <div className='w-full'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {[
                  {
                    image: '/home3.jpg',
                    title: 'Luxury Villa with Pool',
                    location: 'Goa, India',
                    price: '₹85,00,000',
                  },
                  {
                    image: '/home7.jpg',
                    title: 'Modern Apartment in City',
                    location: 'Bangalore, India',
                    price: '₹35,00,000',
                  },
                  {
                    image: '/home1.jpg',
                    title: 'Budget Flat for Rent',
                    location: 'Delhi, India',
                    price: '₹15,000/month',
                  },
                  {
                    image: '/home2.jpg',
                    title: 'Cozy Cottage Retreat',
                    location: 'Manali, HP',
                    price: '₹45,00,000',
                  },
                  {
                    image: '/home4.jpg',
                    title: 'Russia',
                    location: 'Mumbai, India',
                    price: '₹1.2 Cr',
                  },
                  {
                    image: '/home5.jpg',
                    title: 'England',
                    location: 'Mumbai, India',
                    price: '₹1.0 Cr',
                  },
                  {
                    image: '/home6.jpg',
                    title: 'Beautiful home for rent',
                    location: 'Mumbai, India',
                    price: '₹45000/month',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className='border rounded-lg p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between'
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-full h-40 object-cover rounded-md mb-2'
                    />
                    <h3 className='text-lg font-semibold'>{item.title}</h3>
                    <p className='text-sm text-gray-600'>{item.location}</p>
                    <p className='text-green-700 font-semibold mt-1'>
                      {item.price}
                    </p>
                    <button
                      className='mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition'
                      onClick={() => alert(`Booking: ${item.title}`)}
                    >
                      View & Book
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        {!loading &&
  listings.map((listing) => (
    <div key={listing._id} className='relative'>
      <ListingItem listing={listing} />
      <button
        className='absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'
        onClick={() => navigate(`/listing/${listing._id}`, { state: { listing } })}
      >
        View & Book
      </button>
    </div>
  ))}

          


        </div>


        {showMore && (
          <div className='text-center'>
            <button
              onClick={onShowMoreClick}
              className='text-green-700 hover:underline py-5'
            >
              Show more ↓
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
