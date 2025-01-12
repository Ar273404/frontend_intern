import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">KoinX™</div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-600 hover:text-orange-500 focus:outline-none"
            onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke={isMenuOpen ? "orange" : "currentColor"}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <ul
          className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-16 right-0 w-full bg-white md:bg-transparent md:w-auto md:p-0 ${
            isMenuOpen ? "flex items-end" : "hidden"
          }`}>
          <li>
            <a
              href="#"
              className="block text-gray-600 hover:text-blue-500 px-4 py-2 md:px-0">
              Crypto Taxes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-600 hover:text-blue-500 px-4 py-2 md:px-0">
              Free Tools
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-600 hover:text-blue-500 px-4 py-2 md:px-0">
              Resource Center
            </a>
          </li>
        </ul>

        {/* Get Started Button */}
        <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
