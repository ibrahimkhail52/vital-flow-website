import React, { useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";

function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    doctor: "",
    location: "",
  });

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.doctor.trim() !== "" &&
    formData.location.trim() !== "";

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-[#F5FAFF] px-6 sm:px-10 lg:px-12 py-8 sm:py-10 rounded-[30px] w-full max-w-[1100px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-2">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Virtual Consultation
          </h1>

          {/* Reviews */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, idx) => (
                <TiStarFullOutline
                  key={idx}
                  className="h-5 w-5 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-lg font-medium text-gray-600 sm:text-base">
              5.9 (980 Reviews)
            </span>
          </div>
        </div>

        {/* Form */}
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Jane Smith"
              value={formData.name}
              onChange={handleChange}
              className="p-3 w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="doctor" className="mb-2 font-medium">
              Doctor
            </label>
            <input
              id="doctor"
              type="text"
              placeholder="Dr Maria Cleven"
              value={formData.doctor}
              onChange={handleChange}
              className="p-3 w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="location" className="mb-2 font-medium">
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="Amsterdam"
              value={formData.location}
              onChange={handleChange}
              className="p-3 w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`py-3 px-20 sm:px-12 rounded-full text-white transition-colors ${
                isFormValid
                  ? "bg-blue-400 hover:bg-blue-500 active:bg-blue-600"
                  : "bg-blue-200"
              }`}
            >
              Submit
            </button>
          </div>
        </form>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-10">
          <h1 className="text-5xl sm:text-4xl font-semibold">200K+</h1>
          <p className="text-gray-500 text-lg sm:text-base font-bold mt-1">
            Cured & satisfied patients <br className="hidden sm:block" /> around
            the globe
          </p>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
