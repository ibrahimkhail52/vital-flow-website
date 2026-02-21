// ✅ About Hero Data (Top Section)
export const aboutHeroData = {
  badge: "About us",
  title: "A modern dental care home for families",
  buttonText: "Get Started",
};
// ✅ Import images first
import doc1 from "../../../assets/About-images/about.1.avif";
import doc3 from "../../../assets/About-images/about.3.avif";
import doc2 from "../../../assets/About-images/about.2.avif";

// ✅ About Gallery Data (Images + Counters)
export const aboutGalleryData = {
  images: [
    { id: 1, src: doc1 },
    { id: 2, src: doc2 },
    { id: 3, src: doc3 },
  ],
  stats: [
    { id: 1, value: 98, suffix: "%", label: "Satisfaction rate" },
    { id: 2, value: 30, suffix: "+", label: "Years of experience" },
    { id: 3, value: 1000, suffix: "", label: "Patients Treated" },
    { id: 4, value: 80, suffix: "+", label: "Expert Doctors" },
  ],
};

import about4 from "../../../assets/About-images/about.4.avif";
import about5 from "../../../assets/About-images/about.5.avif";

export const missionData = {
  badge: "Our Mission",
  heading: "Transforming lives with medical solutions",
  buttonText: "Book a call",

  images: {
    small: about5,
    large: about4,
  },

  features: [
    {
      id: 1,
      title: "Compassionate care",
      description:
        "Our mission is to provide personalized and empathetic healthcare for individual.",
      icon: "sparkles",
    },
    {
      id: 2,
      title: "Excellence in service",
      description:
        "We strive to deliver high-quality, reliable, and innovative medical solutions.",
      icon: "activity",
    },
  ],
};

import visionImage from "../../../assets/About-images/about.6.avif"; // change to your real image

export const visionData = {
  badge: "Our Vision",
  heading: "Passionate about creating healthier, happier lives",
  buttonText: "Book a call",

  image: visionImage,

  points: [
    {
      id: 1,
      text: "Innovating for better healthcare futures",
    },
    {
      id: 2,
      text: "Leading with patient-focused care solutions",
    },
    {
      id: 3,
      text: "Building healthier and stronger communities",
    },
    {
      id: 4,
      text: "Transforming lives through medical excellence",
    },
  ],
};

export const valuesData = {
  badge: "Our Values",
  heading: "Core principles guiding our healthcare mission",

  values: [
    {
      id: 1,
      title: "Compassion",
      description:
        "We prioritize empathy and understanding, ensuring every patient feels valued, respected, and cared for in their healthcare journey.",
      icon: "edit",
    },
    {
      id: 2,
      title: "Excellence",
      description:
        "We are committed to delivering the highest standards of quality in every aspect of our services, striving for continuous improvement.",
      icon: "briefcase",
    },
    {
      id: 3,
      title: "Integrity",
      description:
        "We uphold honesty and transparency in all interactions, building trust with patients, families, and the community through ethical practices.",
      icon: "x",
    },
  ],
};
