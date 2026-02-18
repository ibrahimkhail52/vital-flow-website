import React from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import doctordata from "./doctorsData";

function DoctorsTeam() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <Motion.section
      className="w-full py-14"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-auto max-w-[77rem] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            <span className="text-sm font-medium text-gray-900">Team</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl leading-tight">
            Meet our dedicated and <br /> experienced team
          </h1>
        </Motion.div>

        {/* Doctor Cards */}
        <Motion.div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {doctordata.map((doctor) => (
            <Motion.div
              key={doctor.id}
              className="group cursor-pointer"
              variants={cardVariants}
              onClick={() => navigate(`/doctors/${doctor.id}`)}
            >
              <div className="h-[350px] w-full bg-[#F5FAFF] rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={doctor.img}
                  alt={doctor.doctorName}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="pt-6 flex items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-semibold text-gray-950">
                    {doctor.doctorName}
                  </h1>
                  <h4 className="mt-1 text-lg sm:text-xl text-gray-600">
                    {doctor.job}
                  </h4>
                </div>
                <div className="flex-shrink-0 border border-gray-300 rounded-lg p-1">
                  <ArrowRight className="h-4 w-4 text-gray-900" />
                </div>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </Motion.section>
  );
}

export default DoctorsTeam;
