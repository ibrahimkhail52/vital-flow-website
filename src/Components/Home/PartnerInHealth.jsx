import React from "react";
import { useNavigate } from "react-router-dom";

import doctor1 from "../../assets/homeImages/doctor1.jpg";
import patient1 from "../../assets/homeImages/patients1.webp";
import patient2 from "../../assets/homeImages/patients2.webp";
import patient3 from "../../assets/homeImages/patients3.webp";

import { TiStarFullOutline } from "react-icons/ti";
import { FaPlay } from "react-icons/fa";

import { motion } from "framer-motion";

function PartnerInHealth() {
  const navigate = useNavigate();
  const healthData = [
    {
      id: 1,
      reviews: "5.0 (980 Reviews)",
      title: "Partner in health\nand wellness",
      description:
        "Providing advanced healthcare solutions with a\ncompassionate touch for every patient.",
      callBtn: "Book a Call",
      watchBtn: "Watch Video",
      appointment: "5000+ Appointments",
      doctorImage: doctor1,
      patients: [patient1, patient2, patient3],
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {healthData.map((doctor) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-12"
          >
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
              className="flex w-full flex-col lg:w-1/2 lg:text-left pl-3"
            >
              {/* Reviews */}
              <div className="flex items-center  gap-2 lg:justify-start">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <TiStarFullOutline
                      key={idx}
                      className="h-5 w-5 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 sm:text-base">
                  {doctor.reviews}
                </span>
              </div>

              {/* Title */}
              <h1 className="mt-5 whitespace-pre-line text-5xl font-semibold leading-10 text-gray-950 sm:text-4xl md:text-5xl">
                {doctor.title}
              </h1>

              {/* Description */}
              <p className="mt-6 whitespace-pre-line font-medium leading-relaxed text-gray-600 sm:text-lg">
                {doctor.description}
              </p>

              {/* Buttons */}
              <div className="mt-8 flex items-center gap-3 sm:flex-row sm:justify-center lg:items-start lg:justify-start">
                <button
                  onClick={() => navigate("/book-call")}
                  className="group relative w-fit overflow-hidden rounded-full bg-[rgb(70,134,255)] px-6 py-3 font-semibold text-white transition-transform duration-300"
                >
                  <span className="relative block overflow-hidden">
                    <span className="block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                      {doctor.callBtn}
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                      {doctor.callBtn}
                    </span>
                  </span>
                </button>

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-fit items-center justify-center gap-2 px-5 py-2 text-sm font-semibold transition hover:text-slate-400"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white transition group-hover:scale-110">
                    <FaPlay className="text-[10px] text-black" />
                  </span>
                  {doctor.watchBtn}
                </a>
              </div>

              {/* Appointments & Avatars */}
              <div className="mt-12 flex items-center gap-5 lg:justify-start">
                <div className="flex -space-x-3">
                  {doctor.patients.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="Patient"
                      className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  ))}
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-gray-900 sm:text-base">
                    {doctor.appointment}
                  </h5>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Patients booked already
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Doctor Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.35, ease: "easeOut" }}
              className="flex w-full justify-center lg:w-1/2 lg:justify-center"
            >
              <img
                src={doctor.doctorImage}
                alt="Doctor"
                className="w-full max-w-md sm:max-w-lg lg:max-w-2xl h-[420px] sm:h-[500px] lg:h-[600px] rounded-[40px] object-cover shadow-lg"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PartnerInHealth;
