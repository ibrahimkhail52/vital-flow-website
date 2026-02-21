export default function TestimonialCard({ name, image, text, rating }) {
  return (
    <div className="bg-[rgba(245,250,255)] rounded-xl p-6">
      {/* User */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <h4 className="text-sm font-semibold text-gray-900">{name}</h4>
      </div>

      {/* Testimonial Text */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{text}</p>

      {/* Stars */}
      <div className="flex gap-1 text-[#FDB022] text-sm">
        {"★".repeat(rating)}
      </div>
    </div>
  );
}