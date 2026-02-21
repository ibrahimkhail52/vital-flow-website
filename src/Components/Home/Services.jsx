import React from "react";
import servicesData from "../Home/Single service/servicesData";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate

import pediatricsIcon from "../../assets/homeImages/Pediatrics-icon.svg";
import orthopedicsIcon from "../../assets/homeImages/Orthopedics-icon.svg";
import gastroIcon from "../../assets/homeImages/Gastroenterology-icon.svg";
import neuroIcon from "../../assets/homeImages/Neurology-icon.svg";
import cardioIcon from "../../assets/homeImages/Cardiology-icon.svg";
import generalIcon from "../../assets/homeImages/Cardiology-icon.svg";

import { ArrowRight } from "lucide-react";

function Services() {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const getServiceIcon = (title) => {
    switch (title.toLowerCase()) {
      case "pediatrics":
        return pediatricsIcon;
      case "orthopedics":
        return orthopedicsIcon;
      case "gastroenterology":
        return gastroIcon;
      case "neurology":
        return neuroIcon;
      case "cardiology":
        return cardioIcon;
      case "general care":
        return generalIcon;
      default:
        return cardioIcon;
    }
  };

  return (
    <section className="w-full bg-white py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span>
            <span className="text-sm font-medium text-gray-900">Services</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl whitespace-pre-line">
            {servicesData.headingTitle}
          </h1>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)} // Click anywhere to navigate
              className="group cursor-pointer rounded-2xl bg-[#F5FAFF] p-6 text-center shadow-sm opacity-0 translate-y-6 animate-fadeIn transition-all duration-300 "
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="mb-5 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#EDF4FF]">
                  <img
                    src={getServiceIcon(service.title)}
                    alt={service.title}
                    className="h-10 w-10 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h2>

              {/* Description */}
              <p className="mt-3 text-lg leading-6 text-gray-600">
                {service.description}
              </p>

              {/* Button UI (Now visual only, card handles click) */}
              <div className="mt-6 flex justify-center">
                <div className="inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold text-black transition-transform duration-200 group-hover:scale-105">
                  {service.viewBtn}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                  {/* group-hover:translate-x-2 adds the space on hover */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s forwards;
          }
        `}
      </style>
    </section>
  );
}

export default Services;
