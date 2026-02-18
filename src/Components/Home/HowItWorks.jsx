import React from "react";
import doctor1 from "../../assets/homeImages/doctors6.webp";
import doctor2 from "../../assets/homeImages/doctors5.jpg";
import doctor3 from "../../assets/homeImages/doctors4.webp";

function HowItWorks() {
  const seamless = [
    {
      id: 1,
      title: "Share your preferences",
      desc: "Tell us about your unique needs and preferences to help us create a personalized plan for your care.",
      img: doctor1,
    },
    {
      id: 2,
      title: "Customized solutions",
      desc: "We analyze your requirements and craft tailored solutions designed specifically for your goals.",
      img: doctor2,
    },
    {
      id: 3,
      title: "Achieve your vision",
      desc: "Experience seamless results as we bring your perfect vision to life with precision and care.",
      img: doctor3,
    },
  ];

  return (
    <section className="w-full bg-white py-14">
      {/* Header */}
      <div className="mb-14 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span>
          <span className="text-sm font-medium text-gray-900">
            How it works
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl lg:text-5xl whitespace-pre-line">
          Step-by-step process for <br /> seamless user experience
        </h1>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {seamless.map((step) => (
          <div key={step.id} className="flex flex-col items-start">
            {/* Step Number */}
            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
              {step.id < 10 ? `0${step.id}` : step.id}
            </div>

            {/* Layout for second card: Title → Image → Description */}
            {step.id === 2 ? (
              <>
                {/* Title */}
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                {/* Image in the middle */}
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full max-w-[400px] h-[250px] object-cover rounded-lg mb-2"
                />

                {/* Description */}
                <p className="text-gray-500 text-lg">{step.desc}</p>
              </>
            ) : (
              <>
                {/* Title */}
                <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-gray-500 text-lg">{step.desc}</p>

                {/* Image */}
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full max-w-[400px] h-[250px] object-cover rounded-lg"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
