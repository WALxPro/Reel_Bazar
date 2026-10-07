import React from "react";
import { Check, ArrowUpRight } from "lucide-react";
import ServiceHero from "../components/ServiceHero";
import HowItWorks from "../components/Howitworks";
import Pricing from "../components/Pricing";
import ServicesContent from "../components/ServicesContent";
// Same blue used across the site (testimonial cards / CTA / Reels)


const Services = () => {
  return (
    <>
    <ServiceHero/>
    <ServicesContent/>
    <HowItWorks/>
    <Pricing/>
    </>
  );
};

export default Services;


