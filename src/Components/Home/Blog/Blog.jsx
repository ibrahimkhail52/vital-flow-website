import React from "react";
import blogData from "./blogData";
import { CalendarDays, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-12">
      {/* Header */}
      <div className="mb-14 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
          <span className="text-sm font-medium text-gray-900">Blog</span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl leading-tight">
          Insights and tips for better{" "}
          <span className="inline sm:block sm:mt-3">healthcare decisions</span>
        </h1>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {blogData.map((blog, index) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="group w-full max-w-[350px] overflow-hidden bg-white cursor-pointer rounded-2xl "
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="py-4 px-3 text-left">
                <h2 className="text-xl font-semibold text-gray-900 leading-snug whitespace-pre-line">
                  {blog.title}
                </h2>

                {/* Meta */}
                <div className="mt-3 flex flex-wrap items-center gap-4 border-t pt-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4 text-blue-400" />
                    <span>{blog.date}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock3 className="h-4 w-4 text-blue-400" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
