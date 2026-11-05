import { useState } from "react";
import PageHero from "../components/PageHero";
import Pricing from "../components/Pricing";
import PageMetadata from "../components/PageMetadata";

const tabs = [
  { id: "video", label: "V1 · Video editing" },
  { id: "website", label: "W1 · Websites" },
  { id: "social", label: "S1 · Social media" },
];

const Services = () => {
  const [active, setActive] = useState("video");

  return (
    <>
      <PageMetadata title="Services & Pricing | Video Editing, Social Media Management & Website Development | TheReelBazar" description="Explore TheReelBazar video editing, website development and social media management packages, pricing, and add-ons." />
      <PageHero eyebrow="Services & pricing" title="Everything your brand needs to be" accent="seen."/>
      <nav className="rb-service-jumps rb-wrap" aria-label="Choose a service">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`rb-button rb-outline${active === tab.id ? " is-active" : ""}`}
            aria-pressed={active === tab.id}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <Pricing active={active} />
    </>
  );
};

export default Services;