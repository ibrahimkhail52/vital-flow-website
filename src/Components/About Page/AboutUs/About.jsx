import { aboutHeroData } from "../AboutUs/aboutUsData";

import AnimatedButton from "../../AnimatedButton/AnimatedButton";

import { motion as Motion } from "framer-motion";

const About = () => {
  const { badge, title, buttonText } = aboutHeroData;

  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 text-center">
      {/* Badge */}
      <Motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm text-black-800 font-semibold mb-4 flex justify-center items-center gap-2"
      >
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        {badge}
      </Motion.p>

      {/* Title */}
      <Motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-7xl font-semibold leading-tight text-gray-900 mb-8"
      >
        {title}
      </Motion.h1>

      {/* Button */}
      <AnimatedButton
        text={buttonText}
        to="/book-call"
        bgColor="#4686FF"
        className="inline-block"
      />
    </section>
  );
};

export default About;
