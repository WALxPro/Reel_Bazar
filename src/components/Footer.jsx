import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/case-study" },
  { label: "About", to: "/about-us" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const services = [
  { label: "Video editing", to: "/services" },
  { label: "Website development", to: "/services" },
  { label: "Social media management", to: "/services" },
];

const phoneNumber = "+923422755150";
const whatsappUrl = "https://wa.me/923422755150";
const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/_thereelbazar/", Icon: FaInstagram },
  { label: "X (Twitter)", href: "https://x.com/TheReelBazar", Icon: FaXTwitter },
  { label: "YouTube", href: "https://www.youtube.com/@TheReelBazar-g8h", Icon: FaYoutube },
];

export default function Footer() {
  return (
    <footer className="rb-footer">
      <div className="rb-wrap rb-footer-content">
        <div className="rb-footer-intro">
          <Link className="rb-brand" to="/" aria-label="TheReelBazar home">
            <img className="rb-brand-logo" src="/logo.jpeg" alt="TheReelBazar" />
            <span>The<em>Reel</em>Bazar</span>
          </Link>
          <p>One creative team for the content, social presence and website that help your brand get noticed.</p>
          <a href="mailto:contact@thereelbazar.com">contact@thereelbazar.com ↗</a>
          <div className="rb-footer-contact-links">
            <a href={`tel:${phoneNumber}`}>+92 342 2755150</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
          </div>
          <div className="rb-footer-socials" aria-label="Social media">
            {socialLinks.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit TheReelBazar on ${label}`} title={label}>
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
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
          <span>Made for brands ready to be <em>noticed.</em></span>
        </div>
      </div>
    </footer>
  );
}
