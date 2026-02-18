import { Edit3, Briefcase, X } from "lucide-react";
import { motion } from "framer-motion";
import { valuesData } from "../About Page/AboutUs/aboutUsData";

const iconMap = {
  edit: Edit3,
  briefcase: Briefcase,
  x: X,
};

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Values = () => {
  const { badge, heading, values } = valuesData;

  return (
    <section className="bg-[#f5faff] py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.p
          className="text-black-500 font-medium flex items-center justify-center gap-2"
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
          className="text-4xl md:text-6xl font-semibold mt-6 text-gray-900 leading-tight max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {heading}
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((item, index) => {
            const IconComponent = iconMap[item.icon];

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-r from-[#4686FF] to-blue-600 
                           text-white rounded-3xl font-semibold p-10 text-left shadow-lg"
              >
                {/* Icon Box */}
                <div
                  className="w-14 h-14 bg-white backdrop-blur-md 
                                rounded-2xl flex items-center justify-center mb-8"
                >
                  <IconComponent size={24} className="text-blue-500" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-6">{item.title}</h3>

                {/* Description */}
                <p className="text-white/90 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
