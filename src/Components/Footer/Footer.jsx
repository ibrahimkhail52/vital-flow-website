import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logoimg from "../../assets/Nav img/LOGO.svg";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        {/* ================= LEFT SIDE ================= */}
        <div className="flex-1 space-y-4 md:max-w-sm">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#4586FF]">
              <img src={logoimg} alt="Vital + Flow Logo" className="w-6 h-6" />
            </div>
            <p className="text-xl font-semibold">Vital + Flow</p>
          </Link>

          <p className="text-gray-500 font-medium text-lg md:text-xl">
            Creative healthcare template to launch your site quick and easily
          </p>

          <button
            onClick={() => {
              navigate("/book-call");
              window.scrollTo(0, 0); // Scroll to top
            }}
            className="group relative overflow-hidden rounded-full bg-[rgb(70,134,255)] px-6 py-3 text-white font-semibold transition-transform duration-300"
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

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex-1 flex flex-col gap-12">
          {/* ================= Subscribe Section ================= */}
          <div className="w-full md:w-1/2">
            <h3 className="font-semibold text-2xl mb-4">Stay up to date</h3>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="name@gmail.com"
                className="flex-1 px-4 py-4 bg-[#F5FAFF] rounded-lg placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4586FF]"
              />
              <button className="bg-[#4586FF] rounded-lg text-white px-7 py-4 hover:bg-blue-600 transition">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              By subscribing you will agree to privacy and policy
            </p>
          </div>

          {/* ================= Links Section ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
            {/* Static Pages */}
            <div>
              <h3 className="font-semibold text-xl mb-4">Static Pages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link
                    to="/"
                    className="text-md hover:text-[#4586FF] transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-md hover:text-[#4586FF] transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-md hover:text-[#4586FF] transition"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="*"
                    className="text-md hover:text-[#4586FF] transition"
                  >
                    404
                  </Link>
                </li>
              </ul>
            </div>

            {/* CMS Pages */}
            <div>
              <h3 className="font-semibold text-xl mb-4">CMS Pages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link
                    to="/services"
                    className="text-md hover:text-[#4586FF] transition"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/doctors"
                    className="text-md hover:text-[#4586FF] transition"
                  >
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-md hover:text-[#4586FF] transition"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="text-md hover:text-[#4586FF] transition"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Detail Pages */}
            <div>
              <h3 className="font-semibold text-xl mb-4">Detail Pages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link
                    to="/service-detail"
                    className="text-md hover:text-[#4586FF] transition"
                  >
                    Service (CMS)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/doctor-detail"
                    className="text-md hover:text-[#4586FF] transition"
                  >
                    Doctor (CMS)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career-detail"
                    className="text-md hover:text-[#4586FF] transition"
                  >
                    Career (CMS)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog-detail"
                    className="text-md hover:text-[#4586FF] transition"
                  >
                    Blogs (CMS)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-semibold text-xl mb-4">Follow us</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md hover:text-[#4586FF] transition"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md hover:text-[#4586FF] transition"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md hover:text-[#4586FF] transition"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md hover:text-[#4586FF] transition"
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
