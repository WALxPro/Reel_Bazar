import React from "react";
import { Link } from "react-router-dom";

import {
  FaPlay,
  FaArrowUpRightFromSquare,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

/* ---------- edit these ---------- */

const BRAND = "The Reel Bazar";

// "Created by" credit (remove the whole block in the JSX if you don't want it)
const CREDIT = {
  name: "Your Name",
  url: "#",
  avatar: "https://i.pravatar.cc/100?img=12",
};

const SOCIALS = [
  
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TheReelBazar-g8h",
    Icon: FaYoutube,
  },
  {
    label: "Twitter",
    href: "https://x.com/TheReelBazar",
    Icon: FaXTwitter,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/_thereelbazar",
    Icon: FaInstagram,
  },
];

const COMPANY_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about-us" },
  { label: "Work", href: "/case-study" },
  
];

const LEGAL_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },

];

// "bold" = heavy sans, "serif" = Playfair italic (same mix as the reference)
const MARQUEE_ITEMS = [
  { text: "Foundation", style: "bold" },
  { text: "Hook Creation", style: "serif" },
  { text: "Raw Content", style: "bold" },
  { text: "Sound Design", style: "serif" },
  { text: "Final Delivery", style: "bold" },
];

/* ---------- styles ---------- */

// Blue version of the glowing footer background
const FOOTER_BG = `
  radial-gradient(circle at 12% 22%, rgba(77,107,255,0.45) 0%, transparent 28%),
  radial-gradient(circle at 38% 30%, rgba(26,46,204,0.75) 0%, transparent 34%),
  radial-gradient(circle at 78% 18%, rgba(26,46,204,0.55) 0%, transparent 38%),
  linear-gradient(180deg, #1a2ecc 0%, #0d1670 42%, #000 88%),
  #000
`;

const MARQUEE_MASK =
  "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)";

const playfair = { fontFamily: '"Playfair Display", serif' };

const linkClasses =
  "text-base text-white transition hover:text-white/60 md:text-lg";

const FooterLink = ({ item }) => {
  if (item.to) {
    return (
      <Link to={item.to} className={linkClasses}>
        {item.label}
      </Link>
    );
  }
  return (
    <a href={item.href} className={linkClasses}>
      {item.label}
    </a>
  );
};

const Column = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    <p className="text-base text-white/50 md:text-lg">{title}</p>
    <div className="mt-2 flex flex-col gap-3">
      {links.map((item) => (
        <FooterLink key={item.label} item={item} />
      ))}
    </div>
  </div>
);

const MarqueeGroup = () => (
  <div
    className="flex shrink-0 items-center gap-6 pr-6 md:gap-10 md:pr-10"
    aria-hidden="true"
  >
    {MARQUEE_ITEMS.map((item) => (
      <React.Fragment key={item.text}>
        <span
          className={`whitespace-nowrap text-[56px] leading-none text-white sm:text-[80px] lg:text-[104px] ${
            item.style === "serif"
              ? "font-normal italic tracking-[-0.03em]"
              : "font-bold tracking-[-0.06em]"
          }`}
          style={item.style === "serif" ? playfair : undefined}
        >
          {item.text}
        </span>
        <span className="text-[56px] font-normal leading-none text-white sm:text-[80px] lg:text-[104px]">
          /
        </span>
      </React.Fragment>
    ))}
  </div>
);

/* ---------- footer ---------- */

const Footer = () => {
  return (
    <footer
      className="relative w-full overflow-hidden px-5 pb-8 pt-16 sm:px-8 md:px-12 lg:px-20 lg:pt-20"
      
    >
      <style>{`
        @keyframes footer-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .footer-marquee-track {
          animation: footer-marquee 45s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-14">
        {/* Top: brand + columns */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          {/* Brand */}
          <div className="max-w-[380px]">
            <Link to="/" className="flex items-center gap-3">
              {/* swap this block for your real logo image if you have one */}
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black">
  <FaPlay size={14} />
</span>
              <span className="text-2xl font-semibold tracking-[-0.03em] text-white">
                {BRAND}
              </span>
            </Link>

            <p className="mt-5 text-base leading-snug text-white/90 md:text-lg">
              {BRAND} is a high performance video editing agency helping brands
              turn content into growth. We create engaging, conversion-focused
              videos for social media, ads, and digital campaigns. Trusted
              worldwide.
            </p>
          </div>

          {/* Columns */}
          <div className="flex flex-wrap gap-x-16 gap-y-10">
            <Column title="Company" links={COMPANY_LINKS} />
            <Column title="Pages" links={LEGAL_LINKS} />

            <div className="flex flex-col gap-4">
              <p className="text-base text-white/50 md:text-lg">Socials</p>
              <div className="mt-2 flex gap-3">
                {SOCIALS.map(({ label, href, Icon }) => (
  <a
    key={label}
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="
      flex h-11 w-11
      items-center justify-center
      rounded-full
      border border-white/20
      bg-white/10
      text-white
      backdrop-blur-md
      transition
      hover:bg-white/25
    "
  >
    <Icon size={20} />
  </a>
))}
              </div>
            </div>
          </div>
        </div>

        {/* Big scrolling headline */}
        <div
          className="flex w-full overflow-hidden"
          style={{ maskImage: MARQUEE_MASK, WebkitMaskImage: MARQUEE_MASK }}
        >
          <div className="footer-marquee-track flex w-max">
            <MarqueeGroup />
            <MarqueeGroup />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white sm:flex-row md:text-base">
         

          <p>
            © {new Date().getFullYear()} {BRAND}®. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;