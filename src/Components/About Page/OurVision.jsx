import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { visionData } from "../About Page/AboutUs/aboutUsData";
import { useNavigate } from "react-router-dom";

const Vision = () => {
  const { badge, heading, buttonText, image, points } = visionData;
const navigate = useNavigate();
  // Animation variants for points
  const pointVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <div>
          {/* Badge */}
          <motion.p
            className="text-black-500 font-medium flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            {badge}
          </motion.p>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mt-4 leading-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {heading}
          </motion.h2>

          {/* Points */}
          <div className="mt-10 space-y-6">
            {points.map((item, index) => (
              <motion.div
                key={item.id}
                variants={pointVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="w-5 h-5 bg-[#4686FF] rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <p className="text-gray-700 text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Button */}

          <button
            onClick={() => navigate("/book-call ")}
            className="group relative overflow-hidden rounded-full bg-[#4686FF] px-6 py-3 text-white font-semibold transition-transform duration-300 mt-12"
          >
            <span className="relative block overflow-hidden">
              <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                Book a call
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                Book a call
              </span>
            </span>
          </button>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={image}
            alt="vision"
            className="rounded-3xl w-[500px] h-[550px] object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
