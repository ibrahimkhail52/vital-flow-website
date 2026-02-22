import React from "react";
import { Link } from "react-router-dom";
import logoimg from "../../assets/Nav img/LOGO.svg";

import AnimatedButton from "../AnimatedButton/AnimatedButton";

export default function Footer() {
 

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-44 text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:flex-1 space-y-4 md:max-w-sm text-center md:text-left">
          <Link
            to="/"
            className="flex items-center justify-center md:justify-start gap-2"
          >
            <div className="p-2 rounded-lg bg-[#4586FF]">
              <img src={logoimg} alt="Vital + Flow Logo" className="w-6 h-6" />
            </div>
            <p className="text-xl font-semibold">Vital + Flow</p>
          </Link>

          <p className="text-gray-500 font-medium text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0">
            Creative healthcare template to launch your site quick and easily
          </p>

          <div className="flex justify-center md:justify-start">
            {/* Animated Button */}
            <div className="mt-8">
              <AnimatedButton
                text="Book a Call"
                to="/book-call"
                bgColor="#4686FF"
                className="inline-block"
              />
            </div>
          </div>
        </div>

        <div className="md:flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-4 mb-4 md:mb-0 text-center md:text-left">
            <h3 className="font-semibold text-xl sm:text-2xl mb-4">
              Stay up to date
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="name@gmail.com"
                className="w-full sm:flex-1 px-4 py-3 sm:py-4 bg-[#F5FAFF] rounded-lg placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4586FF] text-base"
              />
              <button className="w-full sm:w-auto bg-[#4586FF] rounded-lg text-white px-6 sm:px-7 py-3 sm:py-4 hover:bg-blue-600 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-md mx-auto md:mx-0">
              By subscribing you will agree to privacy and policy
            </p>
          </div>

          <div className="text-left">
            <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-3 md:mb-4">
              Static Pages
            </h3>
            <ul className="space-y-1.5 md:space-y-2 text-gray-700">
              <li>
                <Link
                  to="/"
                  className="text-sm sm:text-base hover:text-[#999797] transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm sm:text-base hover:text-[#999797] transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/book-call"
                  className="text-sm sm:text-base hover:text-[#999797] transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="*"
                  className="text-sm sm:text-base hover:text-[#999797] transition"
                >
                  404
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-3 md:mb-4">
              CMS Pages
            </h3>
            <ul className="space-y-1.5 md:space-y-2 text-gray-700">
              <li>
                <Link
                  to="/services"
                  className="text-sm sm:text-base hover:text-[#999797] transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="text-sm sm:text-base hover:text-[#999797] transition"
                >
                  Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm sm:text-base hover:text-[#999797] transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-sm sm:text-base hover:text-[#999797] transition"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-3 md:mb-4">
              Detail Pages
            </h3>
            <ul className="space-y-1.5 md:space-y-2 text-gray-700">
              <li>
                <Link
                  to="/service-detail"
                  className="text-sm sm:text-base hover:text-[#999797] transition"
                >
                  Service (CMS)
                </Link>
              </li>
              <li>
                <Link
                  to="/doctor-detail"
                  className="text-sm sm:text-base hover:text-[#999797] transition"
                >
                  Doctor (CMS)
                </Link>
              </li>
              <li>
                <Link
                  to="/career-detail"
                  className="text-sm sm:text-base hover:text-[#999797] transition"
                >
                  Career (CMS)
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs/1"
                  className="text-sm sm:text-base hover:text-[#999797] transition"
                >
                  Blogs (CMS)
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-3 md:mb-4">
              Follow us
            </h3>
            <ul className="space-y-1.5 md:space-y-2 text-gray-700">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base hover:text-[#999797] transition"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base hover:text-[#999797] transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base hover:text-[#999797] transition"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base hover:text-[#999797] transition"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
