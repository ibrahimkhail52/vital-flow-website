import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import serviceData from "./servicesData";

export default function SingleService() {
    const navigate = useNavigate();
  const { id } = useParams();
  const service = serviceData.services.find((s) => s.id === parseInt(id));

  if (!service)
    return (
      <div className="p-20 text-center text-xl font-bold">
        Service not found
      </div>
    );

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* 2. HERO SECTION (Big Image + Name + Specialist) */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              {service.title}
            </h1>
            <p className="max-w-md text-xl leading-relaxed text-gray-600">
              {service.description}
            </p>

            {/* Specialist Profile Card */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-6">
              <img
                onClick={() => navigate(`/doctors/${service.specialist.id}`)}
                src={service.specialist.profileImg}
                alt={service.specialist.name}
                className="h-14 w-14 rounded-full  cursor-pointer object-cover shadow-md"
              />
              <div>
                <div
                  className="flex items-center gap-2 cursor-pointer group/name"
                  onClick={() => navigate(`/doctors/${service.specialist.id}`)}
                > 
                  <h3 className="font-bold text-gray-900 text-lg">
                    {service.specialist.name}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-gray-400 " />
                </div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {service.specialist.position}
                </p>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img
              src={service.bigImg}
              alt={service.title}
              className="aspect-[4/3] w-full rounded-[48px] object-cover shadow-2xl"
            />
          </Motion.div>
        </div>
      </section>

      {/* 3. DETAILS SECTION (From your Image) */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-16 lg:flex-row">
          {/* Left: Booking Sidebar */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-[35%]"
          >
            <div className="rounded-[40px] bg-[#F8FBFF] p-10 shadow-sm border border-blue-100/30">
              <h2 className="mb-8 text-3xl font-bold leading-tight text-gray-900">
                Book a call with <br /> specialist Now!!
              </h2>

              <div className="space-y-6 mb-10 text-gray-700">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                    <Phone size={18} />
                  </div>
                  <span className="text-lg font-semibold">
                    {service.booking.phone}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                    <Mail size={18} />
                  </div>
                  <span className="text-lg font-semibold">
                    {service.booking.email}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <span className="text-lg font-semibold">
                    {service.booking.location}
                  </span>
                </div>
              </div>

              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => navigate("/book-call")}
                  className="group relative overflow-hidden rounded-full bg-[rgb(70,134,255)] px-6 py-3 text-white font-semibold transition-transform duration-300 w-full"
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
          </Motion.div>

          {/* Right: Content Area */}
          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[65%]"
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              About service:
            </h2>

            <div className="space-y-8 text-xl leading-relaxed text-gray-600">
              <p>{service.aboutService.details}</p>

              <p>
                Equipped with modern facilities and expert surgeons, we offer
                effective solutions for sports injuries, arthritis, and other
                orthopedic challenges. Your recovery and long-term health are
                our utmost priority.
              </p>

              <ul className="mt-8 space-y-5">
                {service.aboutService.points.map((point, i) => (
                  <Motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-gray-400" />
                    <span className="text-gray-700">{point}</span>
                  </Motion.li>
                ))}
              </ul>
            </div>
          </Motion.div>
        </div>
      </section>
    </div>
  );
}
