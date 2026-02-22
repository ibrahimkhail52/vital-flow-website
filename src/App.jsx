import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Nav,
  Footer,
  Contact,
  PartnerInHealth,
  Consultation,
  WhyUs,
  Services,
  AboutUs,
  Features,
  HowItWorks,
  Testimonials,
  Blog,
  FAQs,
  About,
  Counter,
  OurMission,
  OurValues,
  OurVision,
  DoctorsTeam,
  ScrollToTop,
} from "./index";

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
        <Route path="/services/:id" element={<SingleService />} />

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
        {/* Single Doctor Page */}
        <Route path="/doctors/:id" element={<SingleDoctor />} />

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
