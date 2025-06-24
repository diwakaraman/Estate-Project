import { Link } from 'react-router-dom';
import { FaBath, FaBed, FaMapMarkerAlt, FaParking, FaChair } from 'react-icons/fa';

export default function ListingItem({ listing }) {
  return (
    <div className="bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls?.[0] || 'https://via.placeholder.com/330x200'}
          alt={listing.name}
          className="h-[200px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-4">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <FaMapMarkerAlt className="text-green-500 mr-1" />
            <span>{listing.address}</span>
          </div>
          <h3 className="text-lg font-semibold truncate">{listing.name}</h3>

          <p className="text-sm text-gray-500 line-clamp-2 mt-1">{listing.description}</p>

          <p className="mt-2 text-indigo-600 font-bold">
            ₹{listing.offer ? listing.discountedPrice : listing.regularPrice}
            {listing.type === 'rent' && <span className="text-sm font-normal"> / month</span>}
          </p>

          <div className="flex justify-between items-center text-sm text-gray-600 mt-3">
            <p className="flex items-center gap-1">
              <FaBed /> {listing.bedrooms} Beds
            </p>
            <p className="flex items-center gap-1">
              <FaBath /> {listing.bathrooms} Baths
            </p>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
            {listing.parking && (
              <p className="flex items-center gap-1">
                <FaParking /> Parking
              </p>
            )}
            {listing.furnished && (
              <p className="flex items-center gap-1">
                <FaChair /> Furnished
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
