import { Check } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { visionData } from "../About Page/AboutUs/aboutUsData";

import AnimatedButton from "../AnimatedButton/AnimatedButton";

const Vision = () => {
  const { badge, heading, buttonText, image, points } = visionData;

  // Animation variants for points
  const pointVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <Motion.p
            className="text-black-500 font-medium flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            {badge}
          </Motion.p>

          {/* Heading */}
          <Motion.h2
            className="text-4xl md:text-5xl font-semibold mt-4 leading-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {heading}
          </Motion.h2>

          {/* Points */}
          <div className="mt-10 space-y-6">
            {points.map((item, index) => (
              <Motion.div
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
              </Motion.div>
            ))}
          </div>

          {/* AnimatedButton */}
          <AnimatedButton
            text={buttonText}
            to="/book-call"
            bgColor="#4686FF"
            className="inline-block mt-10"
          />
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* RIGHT IMAGE */}
        <motion.div
=======
        {/* ================= RIGHT IMAGE ================= */}
        <Motion.div
>>>>>>> ea00d2e1cb16dd0394fc44f163bba3fe72cf1d13
=======
        {/* ================= RIGHT IMAGE ================= */}
        <Motion.div
>>>>>>> ea00d2e1cb16dd0394fc44f163bba3fe72cf1d13
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
        </Motion.div>
      </div>
    </section>
  );
};

export default Vision;
