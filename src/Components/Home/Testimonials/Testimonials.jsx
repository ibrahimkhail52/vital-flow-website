import testimonialsData from "./testimonialsData";
import { FaStar } from "react-icons/fa6";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-gray-700 mb-3">
            <span className="text-blue-600">• </span>Testimonials
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            What our satisfied and happy <br />
            clients have to say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-[rgba(245,250,255)] rounded-xl p-6"
            >
              {/* User */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h4 className="text-sm font-semibold text-gray-900">
                  {item.name}
                </h4>
              </div>

              {/* Text */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {item.text}
              </p>

              {/* Stars */}
              <div className="flex gap-1 text-[#FDB022]  text-sm">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>
                    <FaStar />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
