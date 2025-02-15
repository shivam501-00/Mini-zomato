import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-full p-2 w-[600px]">
      {/* Location Selector */}
      <div className="flex items-center px-4 py-2 border-r space-x-2">
        <FaMapMarkerAlt className="text-red-500" />
        <span className="text-gray-700 font-medium">Pune</span>
        <span className="text-gray-500">▼</span>
      </div>

      {/* Search Input */}
      <div className="flex items-center flex-1 px-4">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          className="w-full focus:outline-none text-gray-700 bg-transparent"
        />
      </div>
    </div>
  );
}
