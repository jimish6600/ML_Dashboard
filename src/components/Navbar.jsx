import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 w-[100%]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Neural nexus</div>
        <div className="flex space-x-4">
          <Link to="/player-details" className="text-white hover:text-gray-300">
            Player details
          </Link>
          <Link
            to="/upcoming-matches"
            className="text-white hover:text-gray-300"
          >
            Upcoming Matches
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
