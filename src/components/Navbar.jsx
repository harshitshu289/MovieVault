import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/movies?search=${searchTerm}`);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm(""); // Clear the input field
    navigate("/movies"); // Navigate back to the movies section
  };

  return (
    <nav className="bg-gray-800 text-white py-4 px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold hover:text-blue-400">
        🎬 MovieVault
      </Link>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex items-center space-x-2 w-full md:w-auto"
      >
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="py-2 px-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 w-full md:w-64"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="text-white py-2 px-4 rounded font-semibold"
          >
            X
          </button>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>

      {/* Navigation Links */}
      <div className="space-x-2 md:space-x-4 flex flex-col md:flex-row items-center">
        <Link
          to="/movies"
          className="bg-blue-500 hover:bg-blue-600 hover:scale-95 transition-all duration-200 text-white font-semibold py-2 px-4 rounded w-full md:w-auto text-center mb-3"
        >
          Show me awesome movies
        </Link>
        <Link
          to="/"
          className="bg-gray-700 hover:bg-gray-600 text-white hover:scale-95 transition-all duration-200 font-semibold py-2 px-4 rounded w-full md:w-auto text-center"
        >
          Go back Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
