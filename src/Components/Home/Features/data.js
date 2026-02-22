import {
    easyAppoinment,
    personalizedPlans,
    consultationsy,
    medical,
    patient,
    careNetwork,
} from "../../../assets/features img/index";

const featureCards = [
  {
    title: "Easy appointment",
    description:
      "Schedule your appointments quickly with our simple and efficient booking system.",
    image: easyAppoinment,
    className: "mmd:border-r-2 mmd:border-b-2 mmd:w-[50%] xl:w-[33.33%]",
  },
  {
    title: "Personalized plans",
    description:
      "Receive tailored care plans designed to meet your unique health needs and goals.",
    image: personalizedPlans,
    className:
      "mmd:border-b-2 mmd:w-[50%] xl:w-[33.33%] xl:border-r-2",
  },
  {
    title: "24/7 consultationsy",
    description:
      "Access expert medical advice anytime through secure and reliable virtual visits.",
    image: consultationsy,
    className:
      "mmd:border-r-2 mmd:border-b-2 mmd:w-[50%] xl:w-[33.33%] xl:border-r-0",
  },
  {
    title: "Medical technology",
    description:
      "Experience modern healthcare with innovative tools and state-of-the-art equipment.",
    image: medical,
    className:
      "mmd:border-b-2 mmd:w-[50%] xl:w-[33.33%] xl:border-r-2 xl:border-b-0",
  },
  {
    title: "Patient records",
    description:
      "Stay organized with secure, easy access to your medical records whenever needed.",
    image: patient,
    className:
      "mmd:border-r-2 mmd:border-b-2 mmd:w-[50%] xl:w-[33.33%] xl:border-b-0",
  },
  {
    title: "Care network",
    description:
      "Connect with top specialists and facilities to ensure complete healthcare coverage.",
    image: careNetwork,
    className: "mmd:border-b-2 mmd:w-[50%] xl:w-[33.33%] xl:border-b-0",
  },
];

export default featureCards;