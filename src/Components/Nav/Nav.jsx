import React, { useState } from "react";
import { Link } from "react-router-dom";
import Checkbox from "./Checkbox";
import logoimg from "../../assets/Nav img/LOGO.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center md:px-8 lg:px-14">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#4586FF]">
            <img
              src={logoimg}
              alt="Vital + Flow Logo"
              className="w-6 h-6 brightness-0 invert"
            />
          </div>

          <p className="text-xl font-semibold">Vital + Flow</p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium items-center">
          <li>
            <Link to="/about" className="hover:text-[#4586FF] transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-[#4586FF] transition">
              Service
            </Link>
          </li>
          <li>
            <Link to="/doctors" className="hover:text-[#4586FF] transition">
              Doctor
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-[#4586FF] transition">
              Blog
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <Link to="/book-call" className="hidden md:block">
          <button className="bg-[#4586FF] text-white px-5 py-3 rounded-full hover:bg-blue-600 transition duration-300">
            Book a Call
          </button>
        </Link>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Checkbox checked={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white px-6 text-center overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-5 text-lg font-medium">
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Service
            </Link>
          </li>
          <li>
            <Link to="/doctors" onClick={() => setIsOpen(false)}>
              Doctor
            </Link>
          </li>
          <li>
            <Link to="/blogs" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
           
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
