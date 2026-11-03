import PageHero from "../components/PageHero";
import Pricing from "../components/Pricing";
import PageMetadata from "../components/PageMetadata";
import { Link } from "react-router-dom";


const Services = () => {
  return (
    <>
      <PageMetadata title="Services & Pricing | Video Editing, Social Media Management & Website Development | TheReelBazar" description="Explore TheReelBazar video editing, website development and social media management packages, pricing, and add-ons." />
      <PageHero eyebrow="Services & pricing" title="Everything your brand needs to be" accent="seen." description="Pick one service or combine all three. Clear packages, honest prices, no hidden surprises." />
      <nav className="rb-service-jumps rb-wrap" aria-label="Jump to a service">
        <Link className="rb-button rb-outline" to="#video">V1 · Video editing</Link>
        <Link className="rb-button rb-outline" to="#website">W1 · Websites</Link>
        <Link className="rb-button rb-outline" to="#social">S1 · Social media</Link>
      </nav>
      <Pricing />
    </>
  );
};

export default Services;
