import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gradient-to-r from-teal-500 to-purple-600 text-white p-4 fixed top-0 w-full z-20">
      <div className="text-2xl font-bold">BloomScroll</div>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/discover" className="hover:text-gray-300">Discover</Link></li>
        <li className="hover:text-gray-300 cursor-pointer">Write</li>
        <li className="hover:text-gray-300 cursor-pointer">My Communities</li>
      </ul>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 rounded bg-white text-black"
        />
        <button className="hover:text-gray-300">🔔</button>
        <button className="hover:text-gray-300">👤</button>
      </div>
    </nav>
  );
};

export default Navbar;
