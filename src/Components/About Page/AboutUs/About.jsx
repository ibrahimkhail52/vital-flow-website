import { aboutHeroData } from "../AboutUs/aboutUsData";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const { badge, title, buttonText } = aboutHeroData;
const navigate = useNavigate()
  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 text-center">
      {/* Badge */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm text-black-800 font-semibold mb-4 flex justify-center items-center gap-2"
      >
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        {badge}
      </motion.p>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-7xl font-semibold leading-tight text-gray-900 mb-8"
      >
        {title}
      </motion.h1>

      {/* Button */}
      <button
        onClick={() => navigate("/Book-call")}
        className="group relative overflow-hidden rounded-full bg-[#4686FF] px-6 py-3 text-white font-semibold transition-transform duration-300"
      >
        <span className="relative block overflow-hidden">
          <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
            Get Started
          </span>
          <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
            Get Started
          </span>
        </span>
      </button>
    </section>
  );
};

export default About;
