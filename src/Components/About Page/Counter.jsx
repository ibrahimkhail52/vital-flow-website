import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { aboutGalleryData } from "../About Page/AboutUs/aboutUsData";

/* ================= COUNTER COMPONENT ================= */

const Counter = ({ end, suffix, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl md:text-7xl font-semibold text-[#4686FF]">
        {count}
        {suffix}
      </h2>
      <p className="mt-5 text-gray-600 text-xl">{label}</p>
    </div>
  );
};

/* ================= ABOUT GALLERY ================= */

const AboutGallery = () => {
  const { images, stats } = aboutGalleryData;

  return (
    <>
      {/* ================= IMAGES SECTION ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img) => (
            <motion.img
              key={img.id}
              src={img.src}
              alt="doctor"
              initial={{ opacity: 0, y: 60, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl w-full h-[550px] object-cover shadow-xl"
            />
          ))}
        </div>
      </section>

      {/* ================= COUNTER SECTION ================= */}
2
      <section className=" ">
        <div className="max-w-[1500px] mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center  gap-y-12">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className="relative flex justify-center items-center"
              >
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />

                {/* Dot Divider */}
                {index !== stats.length - 1 && (
                  <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutGallery;
