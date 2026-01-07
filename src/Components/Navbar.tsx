import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/meenes-logo.png"; // ✅ Import logo

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Meeny's Kitchen & Grill Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/menu"
              className="text-sm font-medium text-gray-800 hover:text-green-600 transition-colors"
            >
              Menu
            </Link>

            <Link
              to="/help"
              className="text-sm font-medium text-gray-800 hover:text-green-600 transition-colors"
            >
              Help
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
