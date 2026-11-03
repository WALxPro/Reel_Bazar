import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudy from "./pages/CaseStudy";
import Trust from "./pages/Trust";
import FAQ from "./pages/FAQ";
import SingleCaseStudy from "./pages/SingleCaseStudy";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
            <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route 
          path="/about-us" 
          element={<About />} 
        />

        <Route 
          path="/case-study" 
          element={<CaseStudy />} 
        />

        <Route 
          path="/trust" 
          element={<Trust />} 
        />

        <Route 
          path="/faq" 
          element={<FAQ />} />
        <Route 
          path="/services" 
          element={<Services />} />
        <Route 
          path="/contact" 
          element={<Contact />} />

        <Route
  path="/case-study/:slug"
  element={<SingleCaseStudy />} />


      </Routes>

      <Footer/>
      <WhatsAppButton/>
    </>
  );
}