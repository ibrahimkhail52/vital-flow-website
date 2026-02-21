import testimonialsData from "./testimonialsData";
import TestimonialCard from "./TestimonialCard";

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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map(({ id, ...props }) => (
            <TestimonialCard key={id} {...props} />
          ))}
        </div>

      </div>
    </section>
  );
}
