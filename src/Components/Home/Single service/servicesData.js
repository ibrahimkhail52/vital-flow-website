// 1. Import Service Icons
import pediatricsIcon from "../../../assets/homeImages/Pediatrics-icon.svg";
import orthopedicsIcon from "../../../assets/homeImages/Orthopedics-icon.svg";
import gastroIcon from "../../../assets/homeImages/Gastroenterology-icon.svg";
import neuroIcon from "../../../assets/homeImages/Neurology-icon.svg";
import cardioIcon from "../../../assets/homeImages/Cardiology-icon.svg";
import generalIcon from "../../../assets/homeImages/General care.svg";

// 2. Import Big Hero Images
import pediatricsBigImg from "../../../assets/homeImages/Pediatrics.avif";
import orthoBigImg from "../../../assets/homeImages/orthoImg.avif";
import gastroBigImg from "../../../assets/homeImages/generalImg.avif";
import neuroBigImg from "../../../assets/homeImages/neuroImg.avif";
import cardioBigImg from "../../../assets/homeImages/cardioImg.avif";
import generalBigImg from "../../../assets/homeImages/gastroImg.avif";

// 3. Import Specialist Profile Images
import drJaneImg from "../../../assets/homeImages/Pediatrics.avif";
import drAlexImg from "../../../assets/homeImages/orthoImg.avif";
import drMarkImg from "../../../assets/homeImages/gastroImg.avif";
import drSarahImg from "../../../assets/homeImages/neuroImg.avif";
import drJohnImg from  "../../../assets/homeImages/cardioImg.avif";
import drEmilyImg from "../../../assets/homeImages/generalImg.avif";

const serviceData = {
  logo: "/assets/brand-logo.png",
  headingTitle: "Personalized solutions \n for better oral health",
  services: [
    {
      id: 1,
      title: "Pediatrics",
      icon: pediatricsIcon,
      description:
        "Monitor your child's growth and development closely to ensure their health at every stage.",
      viewBtn: "View Services",
      bigImg: pediatricsBigImg, // Using imported variable
      specialist: {
        id: 1,
        name: "Dr. Jane Smith",
        position: "Chief Pediatrician",
        profileImg: drJaneImg, // Using imported variable
      },
      booking: {
        title: "Book a call with specialist Now!!",
        phone: "+1 234 567 890",
        email: "peds@hospital.com",
        location: "Floor 2, Room 204",
      },
      aboutService: {
        details:
          "Comprehensive healthcare for infants, children, and adolescents.",
        points: ["Vaccinations", "Growth Tracking", "Nutrition Advice"],
      },
    },
    {
      id: 2,
      title: "Orthopedics",
      icon: orthopedicsIcon,
      description:
        "Receive care for bone and muscle health with advanced treatments tailored to your needs.",
      viewBtn: "View Services",
      bigImg: orthoBigImg,
      specialist: {
        id: 2,
        name: "Dr. Alex Rivera",
        position: "Orthopedic Surgeon",
        profileImg: drAlexImg,
      },
      booking: {
        title: "Book a call with specialist Now!!",
        phone: "(253) 456-1189",
        email: "ortho@hospital.com",
        location: "(253) 456-1189",
      },
      aboutService: {
        details:
          "Our orthopaedics department specializes in diagnosing and treating musculoskeletal conditions, ensuring mobility and quality of life.",
        points: [
          "Advanced diagnostic imaging and musculoskeletal assessments.",
          "Surgical and non-surgical treatment options for fractures.",
          "Specialized care for joint disorders, including arthritis.",
          "Comprehensive rehabilitation and physical therapy programs.",
          "Preventive care and education for long-term health.",
        ],
      },
    },
    {
      id: 3,
      title: "Gastroenterology",
      icon: gastroIcon,
      description:
        "Comprehensive care for digestive health to address issues with precision.",
      viewBtn: "View Services",
      bigImg: gastroBigImg,
      specialist: {
        id: 3,
        name: "Dr. Mark Vale",
        position: "Gastroenterologist",
        profileImg: drMarkImg,
      },
      booking: {
        title: "Book a call with specialist Now!!",
        phone: "+1 555 000 111",
        email: "gastro@hospital.com",
        location: "Suite 4B",
      },
      aboutService: {
        details: "Expert care for your digestive system.",
        points: ["Endoscopy", "Dietary Planning", "Stomach Care"],
      },
    },
    {
      id: 4,
      title: "Neurology",
      icon: neuroIcon,
      description: "Specialized treatments for brain and nerve health.",
      viewBtn: "View Services",
      bigImg: neuroBigImg,
      specialist: {
        id: 4,
        name: "Dr. Sarah Lee",
        position: "Neurologist",
        profileImg: drSarahImg,
      },
      booking: {
        title: "Book a call with specialist Now!!",
        phone: "+1 555 222 333",
        email: "neuro@hospital.com",
        location: "North Wing",
      },
      aboutService: {
        details: "Focusing on disorders of the nervous system.",
        points: ["Brain Scans", "Nerve Testing", "Stroke Recovery"],
      },
    },
    {
      id: 5,
      title: "Cardiology",
      icon: cardioIcon,
      description:
        "State-of-the-art heart care focused on cardiovascular health.",
      viewBtn: "View Services",
      bigImg: cardioBigImg,
      specialist: {
        id: 5,
        name: "Dr. John Doe",
        position: "Cardiologist",
        profileImg: drJohnImg,
      },
      booking: {
        title: "Book a call with specialist Now!!",
        phone: "+1 555 444 555",
        email: "cardio@hospital.com",
        location: "Cardiac Center",
      },
      aboutService: {
        details: "Advanced heart care and prevention.",
        points: ["ECG", "Heart Surgery", "Blood Pressure"],
      },
    },
    {
      id: 6,
      title: "General care",
      icon: generalIcon,
      description: "Reliable primary healthcare services for your well-being.",
      viewBtn: "View Services",
      bigImg: generalBigImg,
      specialist: {
        id: 6,
        name: "Dr. Emily Blunt",
        position: "General Physician",
        profileImg: drEmilyImg,
      },
      booking: {
        title: "Book a call with specialist Now!!",
        phone: "+1 555 666 777",
        email: "general@hospital.com",
        location: "Reception A",
      },
      aboutService: {
        details: "Your first point of contact for health.",
        points: ["Annual Checkups", "Flu Shots", "Wellness Advice"],
      },
    },
  ],
};

export default serviceData;
