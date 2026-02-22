import React, { useRef, useEffect } from "react";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./style";
import InputField from "./InputField";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().length(10, "Phone number should be 10 characters"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

function ContactUs() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.2 },
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
    <Motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      ref={scrollRef}
      data-scroll-container
      className="px-6 max-w-7xl mx-auto md:px-8 lg:px-14 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      {/* header */}
      <Motion.div
        className="flex flex-col justify-center items-center gap-5 mt-[3rem] px-5"
        variants={itemVariants}
      >
        <div className="flex items-center gap-2">
          <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
          <h5 className="text-[rgb(13,13,13)]">Contact us</h5>
        </div>

        <div className="flex flex-col justify-center items-center gap-6">
          <h2 className="text-center font-medium text-[2.5rem] leading-[3rem] text-[rgb(13,13,13)] mmd:leading-[4rem] mmd:text-[3.5rem] lg:text-[4rem] lg:leading-[4.3rem]">
            Your connection to better{" "}
            <span className="mmd:block">care start here</span>
          </h2>

          <button
            onClick={() => navigate("/services")}
            className="group relative overflow-hidden rounded-full bg-[rgb(70,134,255)] px-6 py-3 text-white font-semibold transition-transform duration-300"
          >
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
      </Motion.div>

      {/* Form */}
      <Motion.div
        variants={itemVariants}
        transition={{ delay: 0.2 }}
        className="mt-[4rem] rounded-3xl border border-[rgb(181,181,181)] flex flex-col mmd:flex-row mmd:justify-between"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[2.5rem] px-8 py-8 mmd:w-[60%]"
        >
          <div className="flex flex-col gap-10 mmd:flex-row mmd:items-center mmd:justify-between">
            <div className="flex flex-col gap-5 mmd:w-[45%]">
              <InputField
                label="Full Name"
                name="name"
                type="text"
                register={register}
                error={errors.name}
                placeholder="John Carter"
              />
            </div>

            <div className="flex flex-col gap-5 mmd:w-[45%]">
              <InputField
                label="Email Address"
                name="email"
                type="email"
                register={register}
                error={errors.email}
                placeholder="yourname@gmail.com"
              />
            </div>
          </div>

          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            register={register}
            error={errors.phone}
            placeholder="+123 456 789"
          />

          <InputField
            label="Message"
            name="message"
            type="textarea"
            register={register}
            error={errors.message}
            placeholder="Type your message here !!!"
            rows={3}
          />

          <button
            type="submit"
            disabled={!isValid}
            className={`${styles.submitBase} ${
              isValid ? styles.submitActive : styles.submitDisabled
            }`}
          >
            Submit
          </button>
        </form>

        {/* reach out */}
        <div className="bg-[rgb(62,130,255)] px-8 rounded-b-3xl mmd:w-[40%] mmd:rounded-none mmd:rounded-tr-3xl mmd:rounded-br-3xl mmd:py-[7rem]">
          <div className="pt-6 pb-12 text-white flex flex-col gap-4 border border-gray-300 border-t-0 border-l-0 border-r-0">
            <h4 className="text-[2.2rem] font-semibold leading-[2.7rem] lg:text-[2.4rem] xl:text-[2.7rem]">
              Reach out directly
            </h4>
            <p className="font-semibold leading-[1.7rem]">
              We're here to answer your questions
              <span className="vs:block">and support your journey.</span>
            </p>
          </div>

          <div className="pt-12 pb-8 text-white flex flex-col gap-6">
            <a href="tel:+14871207980" className={styles.contactLink}>
              <FiPhone className="text-[1.3rem]" />
              <p className="font-medium text-[1.06rem]">(487) 120-7980</p>
            </a>

            <a href="mailto:name@gmail.com" className={styles.contactLink}>
              <TfiEmail className="text-[1.3rem]" />
              <p className="font-medium text-[1.06rem]">name@gmail.com</p>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Riyadh,+KSA"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <IoLocationOutline className="text-[1.3rem]" />
              <p className="font-medium text-[1.06rem]">Riyadh, KSA</p>
            </a>
          </div>
        </div>
      </Motion.div>
    </Motion.div>
  );
}

export default ContactUs;