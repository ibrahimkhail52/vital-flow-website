import React from "react";

import AnimatedButton from "../AnimatedButton/AnimatedButton";

import doctor1 from "../../assets/homeImages/doctor0.jpg";
import doctor2 from "../../assets/homeImages/doctor2.png";
import doctor3 from "../../assets/homeImages/doctor3.png";

function WhyUs() {
  const whyUsData = {
    badge: "Why us",
    title: "Why choose VitalFlow for your healthcare?",
    buttonText: "Get Started",
    features: [
      {
        id: "01",
        title: "Experienced Professionals",
        desc: "Our team of dedicated healthcare providers brings years \n of experience and expertise to deliver care",
      },
      {
        id: "02",
        title: "Advanced Technology",
        desc: "We utilize cutting-edge medical technology to provide \n accurate diagnoses and effective treatments",
      },
    ],
    doctorsCard: {
      title: "Available Doctors",
      subtitle: "Choose Doctors",
      buttonText: "Meet Our Experts",
      doctors: [
        {
          id: 1,
          name: "Jonathan Reed",
          role: "Gastroenterologist",
          img: doctor3,
        },
        {
          id: 2,
          name: "Olivia Bennett",
          role: "Dermatologist",
          img: doctor2,
        },
      ],
    },
    image: doctor1,
  };

  return (
    <section className="w-full bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div>
            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <p className="text-sm font-semibold text-gray-900">
                {whyUsData.badge}
              </p>
            </div>

            {/* Title */}
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-950 leading-tight">
              {whyUsData.title}
            </h1>

            {/* Features */}
            <div className="mt-10 space-y-8">
              {whyUsData.features.map((item) => (
                <div key={item.id} className="flex gap-6">
                  {/* Number */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-200 text-sm font-semibold text-gray-700">
                    {item.id}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Animated Button */}
            <div className="mt-10">
              <AnimatedButton
                text={whyUsData.buttonText}
                to="/book-call"
                bgColor="#4686FF"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full flex justify-center lg:justify-end">
            {/* Main Image */}
            <img
              src={whyUsData.image}
              alt="Doctor"
              className="w-full max-w-[520px] h-[420px] object-cover rounded-[30px]"
            />

            {/* Doctors Card */}
            <div className="absolute -bottom-10 left-6 bg-white rounded-2xl shadow-md w-[280px] p-5">
              <h3 className="font-semibold text-gray-950">
                {whyUsData.doctorsCard.title}
              </h3>
              <p className="text-sm text-gray-500">
                {whyUsData.doctorsCard.subtitle}
              </p>

              <div className="mt-4 space-y-4">
                {whyUsData.doctorsCard.doctors.map((doc) => (
                  <div key={doc.id} className="flex items-center gap-3">
                    <img
                      src={doc.img}
                      alt={doc.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-950 text-sm">
                        {doc.name}
                      </p>
                      <p className="text-xs text-gray-500">{doc.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/doctors")}
                className="mt-5 w-full rounded-xl bg-[#F5FAFF] py-3 font-semibold text-blue-600 transition"
              >
                {whyUsData.doctorsCard.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
