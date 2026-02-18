import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "Booking an appointment is simple and convenient. You can use our online scheduling platform, which allows you to select a time slot that suits you best. Alternatively, you can call our dedicated support line, where a friendly team member will assist you.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "Booking an appointment is simple and convenient. You can use our online scheduling platform, which allows you to select a time slot that suits you best. Alternatively, you can call our dedicated support line, where a friendly team member will assist you.",
  },
  {
    question: "Are your services available 24/7?",
    answer:
      "Yes, we provide round-the-clock services to meet your needs. Our virtual consultation platform is accessible 24/7, allowing you to connect with healthcare professionals anytime.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major insurance plans to make healthcare accessible and affordable for everyone.",
  },
  {
    question: "What makes your care unique?",
    answer:
      "Our care stands out because of our commitment to personalized attention and patient satisfaction.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(1); // default open like image

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 return (
  <section className="bg-gray-50 py-20 px-6">
    <div className="max-w-3xl mx-auto">
      {/* Title */}
      <p className="text-center text-sm text-blue-500 mb-2">• FAQ's</p>

      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        Frequently asked questions <br /> for quick answers
      </h2>

      {/* FAQ List */}
      <div className="space-y-6">
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div key={index} className="border-b border-gray-200 pb-6">
              {/* Question Row (NOT clickable anymore) */}
              <div className="w-full flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {item.question}
                </h3>

                {/* ONLY this button is clickable */}
                <button
                  onClick={() => toggle(index)}
                  className="bg-blue-500 text-white rounded-full p-2 transition-transform duration-300 hover:scale-110 active:scale-95"
                >
                  {isOpen ? <X size={18} /> : <Plus size={18} />}
                </button>
              </div>

              {/* Animated Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

}
