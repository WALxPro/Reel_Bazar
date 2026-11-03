import { Link } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/case-study" },
  { label: "About", to: "/about-us" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const services = [
  { label: "Video editing", to: "/services#video" },
  { label: "Website development", to: "/services#website" },
  { label: "Social media management", to: "/services#social" },
];

export default function Footer() {
  return (
    <footer className="rb-footer">
      <div className="rb-wrap rb-footer-content">
        <div className="rb-footer-intro">
          <Link className="rb-brand" to="/"><b aria-hidden="true" /><span>The<em>Reel</em>Bazar</span></Link>
          <p>One creative team for the content, social presence and website that help your brand get noticed.</p>
          <a href="mailto:contact@thereelbazar.com">contact@thereelbazar.com ↗</a>
        </div>
        <div className="rb-footer-services">
          <h2>What we do</h2>
          <div>
            {services.map((service) => <Link key={service.to} to={service.to}>{service.label}</Link>)}
          </div>
        </div>
        <div className="rb-footer-explore">
          <h2>Explore</h2>
          <nav aria-label="Footer navigation">
            {links.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}
          </nav>
        </div>
        <div className="rb-footer-bottom">
          <small>© {new Date().getFullYear()} TheReelBazar. All rights reserved.</small>
          <a href="https://instagram.com/_thereelbazar" target="_blank" rel="noreferrer">Instagram ↗</a>
          <span>Made for brands ready to be <em>noticed.</em></span>
        </div>
      </div>
    </footer>
  );
}
