import { BrowserRouter, Routes, Route } from "react-router-dom";

// Navbar, Footer & Contact
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

// Home Components
import PartnerInHealth from "./Components/Home/PartnerInHealth";
import Consultation from "./Components/Home/Consultation";
import WhyUs from "./Components/Home/WhyUs";
import Services from "./Components/Home/Services";
import AboutUs from "./Components/Home/AboutUs";
import Features from "./Components/Home/Features";
import HowItWorks from "./Components/Home/HowItWorks";
import Testimonials from "./Components/Home/Testimonials/Testimonials";
import Blog from "./Components/Home/Blog/Blog";
import SingleBlog from "./Components/Home/Single Blog/SingelBlog";
import FAQs from "./Components/Home/FAQs";

// About Components
import About from "./Components/About Page/AboutUs/About";
import Counter from "./Components/About Page/Counter";
import OurMission from "./Components/About Page/OurMission";
import OurVision from "./Components/About Page/OurVision";
import OurValues from "./Components/About Page/OurValues";

// Doctors Components
import DoctorsTeam from "./Components/Doctors/DoctorsTeam/DoctorsTeam";

// Book a Call Components
import ContactUs from "./Components/Book Call/ContactUs";

// ScrollToTop
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <PartnerInHealth />
              <Consultation />
              <WhyUs />
              <Services />
              <AboutUs />
              <Features />
              <HowItWorks />
              <Testimonials />
              <Blog /> {/* Blog list on home */}
              <FAQs />
              <Contact />
            </>
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <>
              <About />
              <Counter />
              <OurMission />
              <OurVision />
              <OurValues />
              <DoctorsTeam />
              <Contact />
            </>
          }
        />

        {/* Services Page */}
        <Route
          path="/services"
          element={
            <>
              <Services />
              <Testimonials />
              <Contact />
            </>
          }
        />

        {/* Doctors Page */}
        <Route
          path="/doctors"
          element={
            <>
              <DoctorsTeam />
              <Testimonials />
              <Contact />
            </>
          }
        />

        {/* Blogs List Page */}
        <Route
          path="/blogs"
          element={
            <>
              <Blog />
              <Testimonials />
              <Contact />
            </>
          }
        />

        {/* Single Blog Page */}
        <Route path="/blogs/:id" element={<SingleBlog />} />

        {/* Book a Call Page */}
        <Route path="/book-call" element={<ContactUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
