import React from "react";

import doctor7 from "../../assets/homeImages/doctor7.jpg";
import boxIcon from "../../assets/homeImages/boxicon.svg";
import starIcon from "../../assets/homeImages/staricon.svg";

import AnimatedButton from "../AnimatedButton/AnimatedButton";

function AboutUs() {
  const aboutUsData = {
    badge: "About Us",
    title: "Vision for a healthier and brighter tomorrow",
    buttonText: "What we do",
    features: [
      {
        id: 1,
        title: "Our Mission",
        desc: "Our mission is to deliver compassionate and \n high-quality healthcare services.",
        icon: boxIcon,
      },
      {
        id: 2,
        title: "Our Vision",
        desc: "Leading healthcare provider, recognized for \n innovative practices and care.",
        icon: starIcon,
      },
    ],
    image: doctor7,
  };

  return (
    <section className="w-full bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="flex justify-center md:justify-start order-first md:order-first">
            <img
              src={aboutUsData.image}
              alt="About Us"
              className="w-full max-w-[550px] h-[480px] object-cover rounded-[30px]"
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <p className="text-sm font-semibold text-gray-900">
                {aboutUsData.badge}
              </p>
            </div>

            {/* Title */}
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-950 leading-tight">
              {aboutUsData.title}
            </h1>

            {/* Features */}
            <div className="mt-6 space-y-6">
              {aboutUsData.features.map((item) => (
                <div key={item.id} className="flex gap-6 items-start">
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50">
                    <img src={item.icon} alt={item.title} className="h-6 w-6" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-500 leading-relaxed whitespace-pre-line">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Animated Button */}
            <div className="mt-8">
              <AnimatedButton
                text={aboutUsData.buttonText}
                to="/services"
                bgColor="#4686FF"
                className="inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
