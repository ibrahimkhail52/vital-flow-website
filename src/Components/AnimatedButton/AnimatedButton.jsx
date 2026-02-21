import React from "react";
import { Link } from "react-router-dom";

const AnimatedButton = ({
  text = "Button",
  to = "#",
  bgColor = "rgb(70,134,255)",
  textColor = "white",
  className = "",
}) => {
  return (
    <Link
      to={to}
      className={`group relative overflow-hidden rounded-full px-6 py-3 font-semibold transition-transform duration-300 ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span className="relative block overflow-hidden">
        {/* Top Text */}
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
          {text}
        </span>

        {/* Bottom Text (Hover Animation) */}
        <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
          {text}
        </span>
      </span>
    </Link>
  );
};

export default AnimatedButton;