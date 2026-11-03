import { Link } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/case-study" },
  { label: "About", to: "/about-us" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="rb-footer">
      <div className="rb-wrap rb-footer-content">
        <Link className="rb-brand" to="/"><b aria-hidden="true" /><span>The<em>Reel</em>Bazar</span></Link>
        <p>One creative team for video editing, social media management and website development.</p>
        <nav aria-label="Footer navigation">
          {links.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}
        </nav>
        <small>© {new Date().getFullYear()} TheReelBazar. All rights reserved.</small>
      </div>
    </footer>
  );
}
