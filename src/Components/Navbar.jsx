import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from '../assets/Logo.jpeg';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-white/95 backdrop-blur-md shadow-lg rounded-full z-50 px-6 py-3">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <HashLink smooth to="/#home" className="flex items-center gap-2 font-bold text-blue-700 text-lg cursor-pointer">
          <img src={Logo} alt="logo" className="h-8" />
          <span>Innovation Catalyst</span>
        </HashLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          <li>
            <Link smooth to="/home" className="hover:text-blue-700 transition">
              Home
            </Link>
          </li>
          <li>
            <Link smooth to="/about" className="hover:text-blue-700 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link smooth to="/offer" className="hover:text-blue-700 transition">
              What We Offer
            </Link>
          </li>
          <li>
            <Link smooth to="/career" className="hover:text-blue-700 transition">
              Career
            </Link>
          </li>
          <li>
            <Link smooth to="/contact" className="hover:text-blue-700 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className="bg-linear-to-r from-blue-700 to-green-600 text-white px-5 py-2 rounded-full shadow hover:shadow-lg transition">
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer text-blue-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 font-medium text-gray-700">
          <li><HashLink smooth to="/#home">Home</HashLink></li>
          <li><HashLink smooth to="/#about">About Us</HashLink></li>
          <li><HashLink smooth to="/#offer">What We Offer</HashLink></li>
          <li><HashLink smooth to="/#career">Career</HashLink></li>
          <li><HashLink smooth to="/#contact">Contact</HashLink></li>
          <li>
            <Link to="/login" className="bg-linear-to-r from-blue-700 to-green-600 text-white px-5 py-2 rounded-full text-center">
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;