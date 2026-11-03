import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Portfolio", path: "/case-study" }, { name: "About", path: "/about-us" }, { name: "Contact", path: "/contact" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("00:00:00:00");
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const frames = Math.floor((max ? scrollY / max : 0) * 92 * 24);
      setTime(`00:${String(Math.floor(frames / 1440)).padStart(2, "0")}:${String(Math.floor(frames / 24) % 60).padStart(2, "0")}:${String(frames % 24).padStart(2, "0")}`);
    };
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
    };
  }, []);

  return (
    <header className="rb-header">
      <div className="rb-wrap rb-nav">
        <Link className="rb-brand" to="/" aria-label="TheReelBazar home">
          <b aria-hidden="true" /><span>The<em>Reel</em>Bazar</span>
        </Link>
        <nav id="primary-navigation" className={open ? "open" : ""} aria-label="Main navigation">
          {links.map((link) => (
            <NavLink onClick={() => setOpen(false)} key={link.path} to={link.path}>
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="rb-nav-right">
          <span className="rb-timecode" aria-label={`Timecode ${time}`}>{time}</span>
          <Link className="rb-button rb-nav-cta rb-glow" to="/contact">Get a quote</Link>
          <button
            type="button"
            className="rb-menu"
            onClick={() => setOpen((isOpen) => !isOpen)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="primary-navigation"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
