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
    </>
  );
}


//  <h1
//           className="w-fit rounded-full px-3 py-2 text-sm font-semibold text-white md:px-7 md:py-3"
//           style={{
//             backdropFilter: "blur(10px)",
//             background: ACTIVE_BG,
//             border: "1px solid rgba(255, 255, 255, 0.15)",
//             borderRadius: "30px",
//             boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 2px 0px",
//           }}
//         >
//           Selected Work
//         </h1>