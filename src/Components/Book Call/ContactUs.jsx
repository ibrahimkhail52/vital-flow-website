import React, { useRef, useEffect } from "react";
// for heavy scrolling
// import Lenis from "@studio-freight/lenis";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().length(10, "Phone number should be 10 characters"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

function ContactUs() {
  const scrollRef = useRef(null);

  const navigate = useNavigate();

  // Framer Motion Variants (animation)
  const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.2},
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  //heavy Scolling 
  // useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.3, 
//       smoothWheel: true,
//       wheelMultiplier: 0.85,
//       smoothTouch: false,
//     });

//   function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }

//   requestAnimationFrame(raf);

//   return () => {
//     lenis.destroy();
//   };
// }, []);


  // Form validation
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });



  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      ref={scrollRef} 
      data-scroll-container 
      className="px-6 max-w-7xl mx-auto md:px-8 lg:px-14 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >

      {/* header */}
      <motion.div 
        className="flex flex-col justify-center items-center gap-5 mt-[3rem] px-5"
        variants={itemVariants}
      >
        <div className="flex items-center gap-2">
          <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
          <h5 className="text-[rgb(13,13,13)]">Contact us</h5>
        </div>

        <div className="flex flex-col justify-center items-center gap-6">
          <h2 className="text-center font-medium text-[2.5rem] leading-[3rem] text-[rgb(13,13,13)] mmd:leading-[4rem] mmd:text-[3.5rem] lg:text-[4rem] lg:leading-[4.3rem] ">
            Your connection to better{" "}
            <span className="mmd:block">care start here</span>
          </h2>

          <button
            onClick={() => navigate("/services")} 
            className=" group relative overflow-hidden rounded-full bg-[rgb(70,134,255)] px-6 py-3 text-white font-semibold transition-transform duration-300">
            <span className="relative block overflow-hidden">
              <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                What we do
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                What we do
              </span>
            </span>
          </button>
        </div>
      </motion.div>


      {/* Form */}
      <motion.div
        variants={itemVariants}
        transition={{ delay: 0.2}} 
        className="mt-[4rem] rounded-3xl border border-[rgb(181,181,181)] flex flex-col mmd:flex-row mmd:justify-between"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[2.5rem] px-8 py-8 mmd:w-[60%]"
        >
          <div className="flex flex-col mmd:flex-row mmd:items-center mmd:justify-between">
            <div className="flex flex-col gap-5 mmd:w-[45%]">
              <label htmlFor="name" className="font-medium text-[1.1rem]">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="border border-[rgb(181,181,181)] border-t-0 border-r-0 border-l-0 pb-3 outline-none text-[rgb(36,36,36)] text-[1.1rem] focus:border-b-[rgb(70,134,255)]"
                placeholder="John Carter"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-5 mmd:w-[45%]">
              <label htmlFor="email" className="font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="border border-[rgb(181,181,181)] border-t-0 border-r-0 border-l-0 pb-3 outline-none text-[rgb(36,36,36)] text-[1.1rem] focus:border-b-[rgb(70,134,255)]"
                placeholder="yourname@gmail.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <label htmlFor="number" className="font-medium">
              Phone Number
            </label>
            <input
              id="number"
              type="tel"
              {...register("phone")}
              className="border border-[rgb(181,181,181)] border-t-0 border-r-0 border-l-0 pb-3 outline-none text-[rgb(36,36,36)] text-[1.1rem] focus:border-b-[rgb(70,134,255)]"
              placeholder="+123 456 789"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-5">
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              {...register("message")}
              className="border border-[rgb(181,181,181)] border-t-0 border-r-0 border-l-0 pb-3 outline-none text-[rgb(36,36,36)] text-[1.1rem] focus:border-b-[rgb(70,134,255)]"
              placeholder="Type your message here !!!"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`
              mt-2 px-8 py-3 rounded-full text-white font-semibold
              transition-all duration-300
              ${
                isValid
                  ? "bg-[rgb(70,134,255)] hover:bg-[rgb(60,120,240)] cursor-pointer"
                  : "bg-[rgb(146,193,255)] cursor-not-allowed"
              }
            `}
          >
            Submit
          </button>
        </form>

        {/* reach out */}
        <div className=" bg-[rgb(62,130,255)] px-8 rounded-b-3xl  mmd:w-[40%] mmd:rounded-none mmd:rounded-tr-3xl mmd:rounded-br-3xl mmd:py-[7rem]">
          <div className="pt-6 pb-12 text-white flex flex-col gap-4 border border-gray-300 border-t-0 border-l-0 border-r-0 ">
            <h4 className="text-[2.2rem] font-semibold leading-[2.7rem] lg:text-[2.4rem] xl:text-[2.7rem]">
              Reach out directly
            </h4>
            <p className="font-semibold leading-[1.7rem]">
              We're here to answer your questions
              <span className="vs:block">
                and support your journey.
              </span>
            </p>
          </div>

          <div className="pt-12 pb-8 text-white flex flex-col gap-6">
            <div className="flex gap-3 items-center">
              <a
                href="tel:+14871207980"
                className="flex gap-3 items-center text-white transition-colors duration-300 hover:text-gray-300"
              >
                <FiPhone className="text-[1.3rem]" />
                <p className="font-medium text-[1.06rem]">(487) 120-7980</p>
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <a
                href="mailto:name@gmail.com"
                className="flex gap-3 items-center text-white transition-colors duration-300 hover:text-gray-300"
              >
                <TfiEmail className="text-[1.3rem]" />
                <p className="font-medium text-[1.06rem]">name@gmail.com</p>
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Riyadh,+KSA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center text-white transition-colors duration-300 hover:text-gray-300"
              >
                <IoLocationOutline className="text-[1.3rem]" />
                <p className="font-medium text-[1.06rem]">Riyadh, KSA</p>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ContactUs;
