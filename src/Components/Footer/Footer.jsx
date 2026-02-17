import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logoimg from "../../assets/Nav img/LOGO.svg";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-24">
        {/* ================= LEFT SIDE ================= */}
        <div className="lg:flex-1 space-y-4 lg:max-w-sm text-center lg:text-left">
          <Link
            to="/"
            className="flex items-center justify-center lg:justify-start gap-2"
          >
            <div className="p-2 rounded-lg bg-[#4586FF]">
              <img src={logoimg} alt="Vital + Flow Logo" className="w-6 h-6" />
            </div>
            <p className="text-xl font-semibold">Vital + Flow</p>
          </Link>

          <p className="text-gray-500 font-medium text-base sm:text-lg md:text-xl max-w-md mx-auto lg:mx-0">
            Creative healthcare template to launch your site quick and easily
          </p>

          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() => {
                navigate("/book-call");
                window.scrollTo(0, 0);
              }}
              className="group relative overflow-hidden rounded-full bg-[rgb(70,134,255)] px-6 py-3 text-white font-semibold transition-transform duration-300 w-full sm:w-auto"
            >
              <span className="relative block overflow-hidden">
                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                  Book a Call
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                  Book a Call
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="lg:flex-1 flex flex-col gap-12 lg:gap-16">
          {/* ================= Subscribe Section ================= */}
          <div className="w-full text-center lg:text-left">
            <h3 className="font-semibold text-xl sm:text-2xl mb-4">
              Stay up to date
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="name@gmail.com"
                className="w-full sm:flex-1 px-4 py-3 sm:py-4 bg-[#F5FAFF] rounded-lg placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4586FF] text-base"
              />
              <button className="w-full sm:w-auto bg-[#4586FF] rounded-lg text-white px-6 sm:px-7 py-3 sm:py-4 hover:bg-blue-600 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-md mx-auto lg:mx-0">
              By subscribing you will agree to privacy and policy
            </p>
          </div>

          {/* ================= Links Section - 2 columns on small screens ================= */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 lg:gap-8 text-left">
            {/* Static Pages */}
            <div>
              <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-3 md:mb-4">
                Static Pages
              </h3>
              <ul className="space-y-1.5 md:space-y-2 text-gray-700">
                <li>
                  <Link
                    to="/"
                    className="text-sm sm:text-base hover:text-[#4586FF] transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sm sm:text-base hover:text-[#4586FF] transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm sm:text-base hover:text-[#4586FF] transition"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="*"
                    className="text-sm sm:text-base hover:text-[#4586FF] transition"
                  >
                    404
                  </Link>
                </li>
              </ul>
            </div>

            {/* CMS Pages */}
            <div>
              <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-3 md:mb-4">
                CMS Pages
              </h3>
              <ul className="space-y-1.5 md:space-y-2 text-gray-700">
                <li>
                  <Link
                    to="/services"
                    className="text-sm sm:text-base hover:text-[#4586FF] transition"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/doctors"
                    className="text-sm sm:text-base hover:text-[#4586FF] transition"
                  >
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-sm sm:text-base hover:text-[#4586FF] transition"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="text-sm sm:text-base hover:text-[#4586FF] transition"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Detail Pages */}
            <div>
              <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-3 md:mb-4">
                Detail Pages
              </h3>
              <ul className="space-y-1.5 md:space-y-2 text-gray-700">
                <li>
                  <Link
                    to="/service-detail"
                    className="text-sm sm:text-base hover:text-[#4586FF] transition"
                  >
                    Service (CMS)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/doctor-detail"
                    className="text-sm sm:text-base hover:text-[#4586FF] transition"
                  >
                    Doctor (CMS)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career-detail"
                    className="text-sm sm:text-base hover:text-[#4586FF] transition"
                  >
                    Career (CMS)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog-detail"
                    className="text-sm sm:text-base hover:text-[#4586FF] transition"
                  >
                    Blogs (CMS)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-3 md:mb-4">
                Follow us
              </h3>
              <ul className="space-y-1.5 md:space-y-2 text-gray-700">
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base hover:text-[#4586FF] transition"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base hover:text-[#4586FF] transition"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base hover:text-[#4586FF] transition"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base hover:text-[#4586FF] transition"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
