import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Portfolio", path: "/case-study" }, { name: "About", path: "/about-us" },{ name: "FAQ", path: "/faq" }, { name: "Contact", path: "/contact" }, ];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("00:00:00:00");
  useEffect(() => {
    const startedAt = Date.now();
    const update = () => {
      const totalFrames = Math.floor(((Date.now() - startedAt) / 1000) * 24);
      const hours = Math.floor(totalFrames / 86400);
      const minutes = Math.floor(totalFrames / 1440) % 60;
      const seconds = Math.floor(totalFrames / 24) % 60;
      const frames = totalFrames % 24;
      setTime(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(frames).padStart(2, "0")}`,
      );
    };
    update();
    const intervalId = window.setInterval(update, 1000 / 24);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <header className="rb-header">
      <div className="rb-wrap rb-nav">
        <Link className="rb-brand" to="/" aria-label="TheReelBazar home">
          <img className="rb-brand-logo" src="/logo.jpeg" alt="TheReelBazar" />
          <span>The<em>Reel</em>Bazar</span>
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
