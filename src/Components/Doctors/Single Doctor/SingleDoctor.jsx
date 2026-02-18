import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import doctordata from "../DoctorsTeam/doctorsData";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

function SingleDoctor() {
  const { id } = useParams();
  const doctor = doctordata.find((doc) => doc.id === parseInt(id));

  if (!doctor)
    return <p className="text-center mt-10 text-xl">Doctor not found</p>;

  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 mt-10 mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Left Image with Background */}
        <div className="md:w-[450px] bg-[#F5FAFF] rounded-2xl flex items-center justify-center p-6 ">
          <img
            src={doctor.img}
            alt={doctor.doctorName}
            className="w-full h-auto rounded-2xl object-contain"
          />
        </div>

        {/* Right Info Card */}
        <div className="md:w-1/2 bg-white rounded-2xl p-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            {doctor.doctorName}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mt-3">{doctor.job}</p>

          <div className="border-t border-gray-300 my-8"></div>

          <div className="grid grid-cols-2 gap-y-6 text-lg md:text-xl">
            <p className="text-gray-600 font-semibold">Experience</p>
            <p className="text-gray-800">{doctor.experience}</p>

            <p className="text-gray-600 font-semibold">Qualifications</p>
            <p className="text-gray-800">{doctor.qualification}</p>

            <p className="text-gray-600 font-semibold">Working hours</p>
            <p className="text-gray-800">{doctor.workingHours}</p>

            <p className="text-gray-600 font-semibold">Location</p>
            <p className="text-gray-800">{doctor.location}</p>
          </div>

          <div className="border-t border-gray-300 my-8"></div>

          {/* Social Icons with Border */}
          <div className="flex gap-4 text-lg">
            <a
              href="#"
              className="border border-gray-400 rounded-[10px] p-3 hover:border-blue-600 hover:text-blue-600 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="border border-gray-400 rounded-[10px] p-3 hover:border-blue-400 hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="border border-gray-400 rounded-[10px] p-3 hover:border-blue-700 hover:text-blue-700 transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="mt-16 space-y-14">
        {/* About */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">About:</h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed whitespace-pre-line">
            {doctor.info.about}
          </p>
        </div>

        {/* Experience Details */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Experience:
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed whitespace-pre-line">
            {doctor.info.experience}
          </p>
        </div>

        {/* Specialties */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Specialties & Info:
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed whitespace-pre-line">
            {doctor.info.specialities}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default SingleDoctor;
