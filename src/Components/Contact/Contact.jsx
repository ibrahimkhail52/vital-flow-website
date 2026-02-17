import React from "react";
import { FaStar } from "react-icons/fa6";

export default function Contact() {
  // Shared input style
  const inputStyle =
    "w-full bg-transparent text-white border-b-2 border-white py-3 outline-none transition-all duration-300 placeholder:text-white placeholder:text-lg focus:border-2 focus:px-3";

  return (
    <div className="bg-[#4586FF] min-h-screen py-20 px-10 md:px-44">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">
        <div className="md:w-[40%] text-white">
          <div className="flex gap-2 items-center mb-6">
            <span className="bg-white h-2 w-2 rounded-full"></span>
            <p className="text-lg font-medium">Contact</p>
          </div>
          <h1 className="text-5xl font-simebold leading-tight mb-6">
            Contact us for more information & get started
          </h1>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-[#FEC01D] text-lg" />
            ))}
          </div>
        </div>

        <div className="md:w-[60%]">
          <form className="flex flex-col gap-14 md:max-w-3xl">
            {/* Input Row 1 - Full Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className={inputStyle}
              />
              <input
                type="email"
                placeholder="Email Address"
                className={inputStyle}
              />
            </div>

            {/* Input Row 2 - Phone Number & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <input
                type="tel"
                placeholder="Phone Number"
                className={inputStyle}
              />
              <input
                type="date"
                placeholder="mm/dd/yyyy"
                className={inputStyle}
              />
            </div>

            {/* Message Row */}
            <div>
              <textarea
                placeholder="Message or additional details"
                rows={5}
                className={`${inputStyle} resize-none w-full`}
              ></textarea>
            </div>

            <div className="w-full -mt-8">
              <button
                type="submit"
                className="bg-white text-[#4586FF] px-16 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
