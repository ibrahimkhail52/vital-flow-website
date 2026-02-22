import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../Blog/blogData";
import { motion as Motion } from "framer-motion";

function SingleBlog() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) return <p className="text-center mt-12">Blog not found</p>;

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
      {/* Date & Title */}
      <Motion.div
        className="flex flex-col justify-center items-center text-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <p className="text-gray-500 text-lg font-semibold">{blog.date}</p>

        <h1 className="mt-10 text-4xl font-bold text-gray-900">{blog.title}</h1>

        {/* Profile */}
        <Motion.div
          className="flex items-center gap-6 mt-8"
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold text-gray-900">
              David Harris
            </h1>
            <p className="font-semibold text-left text-gray-600">
              Pediatrician
            </p>
          </div>
        </Motion.div>
      </Motion.div>

      {/* Main Image */}
      <Motion.div
        className="mt-16 -mx-4 sm:-mx-6 lg:-mx-36"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-2xl object-cover"
        />
      </Motion.div>

      {/* Short Description */}
      <Motion.p
        className="mt-16 text-gray-700 text-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {blog.desc}
      </Motion.p>

      {/* Effects Section */}
      <Motion.section
        className="mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-4xl font-semibold text-gray-900">
          {blog.effects.title}
        </h2>
        <p className="mt-2 text-gray-700 whitespace-pre-line text-lg font-medium">
          {blog.effects.descrip}
        </p>
      </Motion.section>

      {/* Effective Strategies Section */}
      <Motion.section
        className="mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <h2 className="text-4xl font-semibold text-gray-900">
          {blog.effective.title}
        </h2>
        <p className="mt-2 text-gray-700 whitespace-pre-line text-lg font-medium">
          {blog.effective.descrip}
        </p>
      </Motion.section>
    </div>
  );
}

export default SingleBlog;
