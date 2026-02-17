import { motion } from "framer-motion";
import { Sparkles, Activity } from "lucide-react";
import { missionData } from "../About Page/AboutUs/aboutUsData";
import { useNavigate } from "react-router-dom";
const iconMap = {
  sparkles: Sparkles,
  activity: Activity,
};

const OurMission = () => {
  const { badge, heading, buttonText, images, features } = missionData;
const navigate = useNavigate();
  const featureVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
        {/* ================= LEFT IMAGES ================= */}
        <div className="relative flex justify-center items-center">
          {/* Small Image */}
          <motion.img
            src={images.small}
            alt="medical"
            initial={{ opacity: 0, y: 40, scale: 0.8 }} // start lower and smaller
            whileInView={{ opacity: 1, y: 0, scale: 1 }} // rise up and scale
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-[200px] h-[300px] md:w-[200px] md:h-[350px]
                       object-cover rounded-full absolute
                       left-0 bottom-0 shadow-xl z-10"
          />

          {/* Large Image */}
          <motion.img
            src={images.large}
            alt="doctor"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="w-[350px] h-[450px] md:w-[320px] md:h-[520px]
                       object-cover rounded-full shadow-xl z-0"
          />
        </div>

        {/* ================= RIGHT CONTENT ================= */}
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

          {/* Features */}
          <div className="mt-10 space-y-6">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];

              return (
                <motion.div
                  key={feature.id}
                  className="flex gap-5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={featureVariants}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow">
                    <IconComponent className="text-[#4686FF]" size={22} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 mt-2 max-w-md">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Button */}
          <motion.button
            onClick={() => navigate("/book-call")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: features.length * 0.2 + 0.2 }}
            className="group relative overflow-hidden rounded-full bg-[#4686FF] px-6 py-3 text-white font-semibold transition-transform duration-300 mt-12"
          >
            <span className="relative block overflow-hidden">
              <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                {buttonText}
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                {buttonText}
              </span>
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
