import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Work", path: "/case-study" },
  { name: "Services", path: "/services" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        fixed
        top-6
        left-1/2
        z-50
        w-[calc(100%-32px)]
        max-w-5xl
        -translate-x-1/2
      "
    >
      {/* TOP NAVBAR PILL */}
      <div
        className="
          relative
          z-20
          px-6
          py-3
        "
        style={{
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          background: "rgba(0, 0, 0, 0.15)",
          borderRadius: "999px",
          border: "1px solid rgba(171, 171, 171, 0.2)",
          boxShadow: "rgba(0, 0, 0, 0.25) 2px 5px 10px 0px",
        }}
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-white"
          >
            <img
              src="/logo.jpeg"
              alt="TheReelBazar"
              className="h-12 w-12 rounded-full object-contain"
            />

            <span className="hidden md:block">TheReelBazar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `
                    text-sm
                    transition
                    ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }
                  `
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Button */}
          <Link
            to="/contact"
            className="
              hidden
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2
              text-xs
              font-semibold
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/20
              md:block
            "
          >
            BOOK A CALL
          </Link>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              text-white
              backdrop-blur-md
              md:hidden
            "
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU - SEPARATE FROM PILL */}
      {isOpen && (
        <div
          className="
            absolute
            left-0
            right-0
            top-[76px]
            z-10
            rounded-[28px]
            border
            border-white/10
            bg-black/50
            p-6
            backdrop-blur-2xl
            md:hidden
          "
          style={{
            boxShadow: "rgba(0,0,0,0.35) 0px 18px 45px",
          }}
        >
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `
                    text-base
                    transition
                    ${
                      isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    }
                  `
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="
                mt-2
                w-full
                rounded-full
                border
                border-white/20
                bg-white/10
                py-3
                text-center
                text-sm
                font-semibold
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
              "
            >
              BOOK A CALL
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}